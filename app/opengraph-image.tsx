import { ImageResponse } from "next/og";

export const alt = "Máximo Paredes — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGS = ["Next.js", "TypeScript", "IA", "Automatización"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.22) 0%, rgba(9,9,11,0) 55%), #09090b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #6366f1, #4338ca)",
              color: "white",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            MP
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(99,102,241,0.4)",
              background: "rgba(99,102,241,0.12)",
              color: "#a5b4fc",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            Full-stack developer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Máximo Paredes
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#a1a1aa",
              fontSize: 30,
              maxWidth: 820,
            }}
          >
            Aplicaciones full-stack, integraciones de IA y automatización
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {TAGS.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #27272a",
                color: "#d4d4d8",
                fontSize: 22,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
