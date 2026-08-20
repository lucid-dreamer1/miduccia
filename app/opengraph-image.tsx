import { ImageResponse } from "next/og";

export const alt = "Osteria da Miduccia — Trattoria Tradizionale a Caserta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3a3222 0%, #4a4029 40%, #5f5232 100%)",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(212, 106, 42, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-40px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(150, 132, 74, 0.15)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {/* Olive emoji */}
          <span style={{ fontSize: "64px", marginBottom: "8px" }}>🫒</span>

          {/* Subtitle top */}
          <span
            style={{
              fontSize: "18px",
              color: "#e08549",
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              fontWeight: 500,
            }}
          >
            — Trattoria Tradizionale —
          </span>

          {/* Title */}
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#fefdfb",
              lineHeight: 1,
              marginTop: "8px",
            }}
          >
            Osteria
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#e08549",
              fontStyle: "italic",
              lineHeight: 1,
            }}
          >
            da Miduccia
          </span>

          {/* Location */}
          <span
            style={{
              fontSize: "20px",
              color: "rgba(254, 253, 251, 0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              marginTop: "24px",
            }}
          >
            📍 Caserta, Campania
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #d46a2a, #e08549, #d46a2a)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
