import { ImageResponse } from "next/og";

export const alt = "Kairoz — The shadcn for AI tooling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: 80,
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#ffffff",
            }}
          />
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Kairoz
          </div>
          <div
            style={{
              marginLeft: 8,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#777777",
              fontWeight: 600,
              padding: "5px 10px",
              border: "1px solid #1e1e1e",
              borderRadius: 4,
              display: "flex",
            }}
          >
            v0.2 · MIT
          </div>
        </div>

        {/* Main centered block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#aaaaaa",
              fontWeight: 600,
              marginBottom: 22,
              display: "flex",
            }}
          >
            Design system · agent UI
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 0.98,
              color: "#ffffff",
              marginBottom: 26,
              maxWidth: 900,
              display: "flex",
            }}
          >
            The shadcn for AI tooling.
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: "#aaaaaa",
              maxWidth: 760,
              fontWeight: 400,
              letterSpacing: "-0.005em",
              display: "flex",
            }}
          >
            180+ tokens. 50+ component classes. Framework-agnostic. Works with any stack.
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "11px 20px",
              background: "#ededed",
              color: "#000000",
              borderRadius: 9999,
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "-0.005em",
            }}
          >
            Start building →
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 14px",
              background: "#0f0f0f",
              border: "1px solid #1e1e1e",
              borderRadius: 8,
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: 15,
              color: "#aaaaaa",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#50e3c2",
              }}
            />
            kairoz-live.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
