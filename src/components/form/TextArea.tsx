import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";
type TextAreaAttributes = QwikIntrinsicElements["textarea"];

interface TextAreaProps extends Omit<TextAreaAttributes, "children"> {
  label: string;
}

export default component$<TextAreaProps>(({ label, ...attributes }) => {
  return (
    <div class="textarea-field relative mb-4">
      <label for={attributes.name} class="visually-hidden">
        {label}
      </label>
      <textarea
        {...attributes}
        class="peer w-full py-4 px-6 border-b border-white bg-transparent text-base leading-[1.625] text-white placeholder:text-white placeholder:opacity-50 placeholder:uppercase mb-8"
      ></textarea>

      <svg
        class="w-6 h-6 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 hidden peer-focus-visible:peer-invalid:inline-block peer-focus-visible:peer-invalid:top-[1.2rem] peer-focus-visible:peer-invalid:right-6 peer-focus-visible:peer-invalid:translate-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B"></circle>
        <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B"></rect>
        <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B"></rect>
      </svg>
    </div>
  );
});
