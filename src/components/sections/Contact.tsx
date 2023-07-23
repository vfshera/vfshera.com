import { contactDesc } from "@/data";
import { component$ } from "@builder.io/qwik";
import TextArea from "@/components/form/TextArea";
import Input from "@/components/form/Input";
import { globalAction$, zod$, z, Form } from "@builder.io/qwik-city";
import { createContact } from "@/db";

export const useAddContact = globalAction$(
  async (msg, { fail }) => {
    const [r] = await createContact(msg);

    if (r.affectedRows != 1) {
      return fail(500, {
        message: "Failed to add contact!",
      });
    }

    return {
      success: true,
    };
  },
  zod$({
    name: z.string().min(5),
    email: z.string().email(),
    message: z.string().min(5),
  })
);

export default component$(() => {
  const action = useAddContact();

  return (
    <section id="contact" class="relative bg-slate-800">
      <div class="wrapper lg:grid lg:grid-cols-[repeat(2,27.8rem)] lg:justify-between py-[84px] bottom-border">
        <div class="text-center lg:text-left">
          <h2 class="lg:mb-9 mb-5 text-[clamp(2.2rem,0.5rem+6.5vw,4.5rem)] leading-[1.2] -tracking-[.028em]">
            Contact
          </h2>
          <p class="">{contactDesc}</p>
        </div>
        <Form action={action} class="contact-form">
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            minLength={5}
            required
          />

          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <TextArea
            label="Message"
            name="message"
            id="message"
            cols={30}
            rows={3}
            placeholder="Message"
            minLength={5}
            required
          />

          {action.value?.success && <p> Message sent!</p>}
          <div class="flex justify-center lg:justify-end">
            <button
              disabled={action.isRunning}
              type="submit"
              class="bg-transparent border-none"
            >
              Send Message
            </button>
          </div>
        </Form>
      </div>

      <svg
        class="rings absolute left-0 bottom-[97px] -translate-x-[75%] -translate-y-[75%] sm:bottom-[47px] lg:-translate-x-[40%] lg:-translate-y-[20%]"
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
      >
        <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5"></ellipse>
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5"></ellipse>
        </g>
      </svg>
    </section>
  );
});
