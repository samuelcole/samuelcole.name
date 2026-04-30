import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./_lib/load-google-font";

export const alt = "Samuel Cole — founding engineer & CTO";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
      <div style={{ fontSize: 140, color: "#d62828" }}>♥</div>
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
