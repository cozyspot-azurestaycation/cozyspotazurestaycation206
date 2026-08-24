import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background:
            "radial-gradient(120% 120% at 15% 0%, #1D4058 0%, #0F2538 55%, #081420 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#B8C3CC",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.address.addressLocality} · Private Staycation
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            color: "#F5F1E8",
            fontFamily: "serif",
            maxWidth: 900,
            lineHeight: 1.05,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
