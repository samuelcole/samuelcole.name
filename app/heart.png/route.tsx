import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f8de",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d62828",
          fontSize: 420,
          lineHeight: 1,
        }}
      >
        ♥
      </div>
    ),
    { width: 500, height: 500 },
  );
}
