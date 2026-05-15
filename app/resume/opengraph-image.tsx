import { ImageResponse } from "next/og";
import { loadGoogleFont } from "../_lib/load-google-font";

export const alt = "Samuel Cole — Resume";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f8f8de";
const INK = "#131210";
const INK_2 = "#3a3833";
const INK_3 = "#807c6f";
const RED = "#d62828";
const RULE_SOFT = "rgba(19, 18, 16, 0.08)";

const TEXT_400 =
  "web samuel-cole-resume.pdf samuel-cole-resume.md > Founding engineer and CTO. I make things from scratch. Lemontree · ActBlue · Kickstarter · Abacus · Patch sam@samuelcole.name";
const TEXT_700 = "Samuel Cole § EXPERIENCE";

export default async function Image() {
  const [regular, bold] = await Promise.all([
    loadGoogleFont("JetBrains+Mono:wght@400", TEXT_400),
    loadGoogleFont("JetBrains+Mono:wght@700", TEXT_700 + " " + TEXT_400),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: PAPER,
        backgroundImage:
          "radial-gradient(900px 500px at 12% -10%, rgba(255,255,255,0.55), transparent 65%), radial-gradient(700px 500px at 110% 110%, rgba(214,40,40,0.10), transparent 70%)",
        fontFamily: "JetBrains Mono, monospace",
        color: INK,
        padding: "72px 80px",
      }}
    >
      <div style={{ display: "flex", paddingLeft: 32, gap: 3 }}>
        <div
          style={{
            display: "flex",
            padding: "14px 24px 16px",
            background: PAPER,
            color: INK,
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "0.02em",
            borderRadius: "8px 8px 0 0",
            boxShadow: "0 -14px 30px -12px rgba(80, 40, 10, 0.28)",
          }}
        >
          web
        </div>
        <div
          style={{
            display: "flex",
            padding: "14px 24px 16px",
            background: RULE_SOFT,
            color: INK_3,
            fontSize: 20,
            letterSpacing: "0.02em",
            borderRadius: "8px 8px 0 0",
          }}
        >
          samuel-cole-resume.pdf
        </div>
        <div
          style={{
            display: "flex",
            padding: "14px 24px 16px",
            background: RULE_SOFT,
            color: INK_3,
            fontSize: 20,
            letterSpacing: "0.02em",
            borderRadius: "8px 8px 0 0",
          }}
        >
          samuel-cole-resume.md
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          padding: "64px 72px",
          flex: 1,
          borderRadius: "6px 6px 16px 16px",
          boxShadow:
            "0 36px 90px -30px rgba(80, 40, 10, 0.35), 0 12px 28px -16px rgba(80, 40, 10, 0.22)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 112,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: INK,
            }}
          >
            Samuel Cole
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 112,
              color: RED,
              lineHeight: 1,
            }}
          >
            ♥
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 32,
            color: INK_2,
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          <span style={{ color: RED, fontWeight: 700, marginRight: 10 }}>
            &gt;
          </span>
          <span style={{ display: "flex" }}>
            Founding engineer and CTO. I make things from scratch.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingTop: 48,
            alignItems: "center",
            fontSize: 22,
            color: INK_3,
            fontWeight: 400,
          }}
        >
          <span
            style={{
              color: RED,
              fontWeight: 700,
              fontSize: 28,
              marginRight: 16,
            }}
          >
            §
          </span>
          <span
            style={{
              color: INK,
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "0.22em",
              marginRight: 22,
            }}
          >
            EXPERIENCE
          </span>
          <span style={{ display: "flex", color: INK_2 }}>
            Lemontree · ActBlue · Kickstarter · Abacus · Patch
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "JetBrains Mono",
          data: bold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
