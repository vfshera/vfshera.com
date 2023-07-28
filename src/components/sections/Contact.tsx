import { contactDesc } from "@/data";
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import TextArea from "@/components/form/TextArea";
import Input from "@/components/form/Input";
import { globalAction$, zod$, z, Form } from "@builder.io/qwik-city";
import { createContact } from "@/db";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

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

  const contactRef = useSignal<HTMLFormElement>();

  useVisibleTask$(({ track }) => {
    const success = track(() => action.value?.success);

    if (success) {
      if (contactRef.value) {
        contactRef.value.reset();
        Toastify({
          text: "Thank you for contacting",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {},
        }).showToast();
      }
    }
  });

  return (
    <section title="Contact" id="contact" class="relative bg-slate-800">
      <div class="wrapper lg:grid lg:grid-cols-[repeat(2,27.8rem)] lg:justify-between py-[84px] bottom-border">
        <div class="text-center lg:text-left">
          <h2 class="lg:mb-9 mb-5 text-[clamp(2.2rem,0.5rem+6.5vw,4.5rem)] leading-[1.2] -tracking-[.028em]">
            Contact
          </h2>
          <p class="">{contactDesc}</p>
        </div>
        <Form
          ref={contactRef}
          action={action}
          onSubmitCompleted$={() => {}}
          class="contact-form"
        >
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
