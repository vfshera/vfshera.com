import { type RequestHandler } from "@builder.io/qwik-city";
import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

import spaceGrotesk from "@/fonts/space-grotesk.ttf";

export const onGet: RequestHandler = async ({ send }) => {
  const out = html`<div
    tw="flex flex-col  items-center justify-center w-full h-full bg-slate-200  text-center  "
  >
    <h1 tw="text-6xl text-slate-500 font-bold  text-center  ">vfshera</h1>
  </div>`;

  const svg = await satori(out, {
    fonts: [
      {
        name: "Space Grotesk",
        data: Buffer.from(spaceGrotesk),
        style: "normal",
      },
    ],
    height: 630,
    width: 1200,
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
  });

  const image = resvg.render();

  send(
    new Response(image.asPng(), {
      headers: {
        "Content-Type": "image/png",
      },
    })
  );
};
