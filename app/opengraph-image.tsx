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
            "radial-gradient(120% 120% at 15% 0%, #2E5266 0%, #16283A 55%, #0E1B27 100%)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7FA8B3",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.address.addressLocality} · Private Staycation
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            color: "#EFEAE0",
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
