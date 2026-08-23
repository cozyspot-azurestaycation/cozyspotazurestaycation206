import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#16283A",
          borderRadius: 7,
          color: "#B8863B",
          fontSize: 19,
          fontWeight: 600,
          fontFamily: "serif",
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
