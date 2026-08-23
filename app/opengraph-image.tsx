import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
  style={{
    display: "flex",
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
    display: "flex",
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
