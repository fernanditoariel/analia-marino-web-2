import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const alt = `${content.brand.name} | Productora de seguros`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#081633",
          color: "#eaf0fb",
        }}
      >
        <div style={{ fontSize: 40, color: "#1bc5bd", fontWeight: 700 }}>
          {`${content.brand.name} | Productora de seguros`}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          {content.hero.title}
        </div>
        <div style={{ marginTop: 32, fontSize: 32, color: "#a9b8d6", maxWidth: 900 }}>
          {content.hero.subtitle}
        </div>
      </div>
    ),
    { ...size },
  );
}
