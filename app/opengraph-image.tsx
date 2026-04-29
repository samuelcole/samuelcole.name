import { ImageResponse } from "next/og";

export const alt = "Samuel Cole — founding engineer & CTO";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url, { cache: "force-cache" })).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1], { cache: "force-cache" });
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f8f8de",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <div style={{ fontSize: 100, color: "#d62828" }}>♥</div>
      <div
        style={{
          fontSize: 80,
          fontWeight: 300,
          color: "#131210",
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        samuel cole
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: await loadGoogleFont("JetBrains+Mono:wght@300", "samuel cole"),
          style: "normal",
          weight: 300,
        },
      ],
    },
  );
}
