import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "#f8f8de",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#d62828",
        fontSize: 150,
        lineHeight: 1,
      }}
    >
      ♥
    </div>,
    size,
  );
}
