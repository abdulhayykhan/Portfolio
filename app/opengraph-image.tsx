import { ImageResponse } from "next/og";

import { SITE_DESCRIPTION, SITE_NAME } from "@/app/lib/site-config";

export const alt = `${SITE_NAME} portfolio preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(circle at top left, rgba(56, 189, 248, 0.4), transparent 38%), linear-gradient(135deg, #02050b 0%, #07101d 60%, #0b1630 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(125, 211, 252, 0.35)",
              background: "rgba(14, 165, 233, 0.12)",
              color: "#bfdbfe",
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 80,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.25, color: "#dbeafe", maxWidth: 680 }}>
            {SITE_DESCRIPTION}
          </div>
        </div>

        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: 32,
            border: "1px solid rgba(125, 211, 252, 0.24)",
            background:
              "linear-gradient(180deg, rgba(8, 21, 37, 0.92), rgba(3, 10, 20, 0.92))",
            boxShadow:
              "0 0 0 1px rgba(125, 211, 252, 0.08), 0 20px 70px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 28,
          }}
        >
          <div style={{ color: "#7dd3fc", fontSize: 22, letterSpacing: 2 }}>AI / Backend</div>
          <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1 }}>DUET</div>
          <div style={{ color: "#cbd5e1", fontSize: 22, lineHeight: 1.35 }}>
            Python, FastAPI, Flask, PostgreSQL, and full-stack delivery.
          </div>
        </div>
      </div>
    ),
    size,
  );
}