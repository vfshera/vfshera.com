import type { RequestHandler } from "@builder.io/qwik-city";
import { fetchFont, html, ImageResponse } from "og-img";

import { APP } from "~/constants";

export const onGet: RequestHandler = async ({
  cacheControl,
  send,
  url,
  env,
}) => {
  // Disable caching
  cacheControl("no-cache");

  const SITE_URL =
    process.env.NODE_ENV === "production" ? env.get("DOMAIN") : url.origin;

  // Get data from search params
  const title = url.searchParams.get("title");
  const description = url.searchParams.get("description");
  const path = url.searchParams.get("path");

  // Create icon and font directory URL
  const iconUrl = SITE_URL + "/android-chrome-512x512.png";
  const fontDirUrl = SITE_URL + "/fonts";

  // Create  font object
  const spaceGrotesk = {
    name: "SpaceGrotesk",
    data: await fetchFont(fontDirUrl + "/space-grotesk.ttf"),
    style: "normal",
    weight: 400,
  } as const;

  // If title is available, return image with text
  if (title) {
    send(
      new ImageResponse(
        html`
          <div
            tw="flex h-full w-full flex-col justify-between bg-gray-900 p-16"
            style="font-family: 'SpaceGrotesk'"
          >
            <div tw="flex items-center justify-between">
              <div tw="flex items-center">
                <img tw="w-16 h-16" src="${iconUrl}" />
                <div
                  tw="text-4xl font-medium text-slate-300 ml-4"
                  style="font-family: 'SpaceGrotesk'"
                >
                  ${APP.name}
                </div>
              </div>
              <div
                tw="max-w-[50%] text-4xl text-slate-500"
                style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap"
              >
                vfshera.com${path ? `/` + path : ""}
              </div>
            </div>
            <div tw="flex flex-col">
              <h1
                tw="max-w-[80%] text-6xl font-medium leading-normal text-slate-200"
                style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap"
              >
                ${title}
              </h1>
              <p
                tw="text-4xl text-slate-400 leading-loose"
                style="${description ? "" : "display: none"}}"
              >
                ${description
                  ? description.length > 110
                    ? description.slice(0, 110).trimEnd() + "..."
                    : description
                  : ""}
              </p>
            </div>
          </div>
        `,
        {
          width: 1200,
          height: 630,
          fonts: [spaceGrotesk],
        }
      )
    );

    // Otherwise, return image just with logo
  } else {
    send(
      new ImageResponse(
        html`
          <div
            tw="flex h-full w-full items-center justify-center bg-gray-900"
            style="font-family: 'SpaceGrotesk'"
          >
            <div tw="flex items-center">
              <img tw="w-36 h-36" src="${iconUrl}" />
              <div tw="text-8xl font-medium text-slate-300 ml-10">
                ${APP.name}
              </div>
            </div>
          </div>
        `,
        {
          width: 1200,
          height: 630,
          fonts: [spaceGrotesk],
        }
      )
    );
  }
};
