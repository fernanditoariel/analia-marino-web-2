import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1bc5bd",
          color: "#06172f",
          fontSize: 44,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
