import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <p style={{ fontSize: 28, opacity: 0.6, margin: 0 }}>
          {site.title}
        </p>
        <p style={{ fontSize: 72, fontWeight: 700, margin: "16px 0 0", lineHeight: 1.1 }}>
          {site.fullName}
        </p>
        <p style={{ fontSize: 32, margin: "24px 0 0", opacity: 0.8 }}>
          {site.positioning}
        </p>
      </div>
    ),
    { ...size }
  );
}