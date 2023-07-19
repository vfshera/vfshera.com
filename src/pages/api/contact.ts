import { createContact } from "@/db";
import type { Contact } from "@/db/schema";
import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const { name, email, message } = (await request.json()) as Contact;

    if (!!email || !!email || !!message) {
      await createContact({ name, email, message });

      return new Response(
        JSON.stringify({
          message: "Your message has been sent!",
        }),
        {
          status: 201,
        }
      );
    }
  }

  return new Response(null, { status: 400 });
};
