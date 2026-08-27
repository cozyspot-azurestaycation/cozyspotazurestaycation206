"use client";

import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/site-config";

/**
 * QR code for the Viber business account, so a guest browsing on desktop
 * (or looking at a printed flyer) can scan straight into a chat.
 */
export function ViberQr() {
  return (
    <div className="flex w-fit flex-col items-center gap-3 rounded-2xl bg-linen p-5 text-center shadow-card-light">
      <p className="text-xs font-medium text-ink">
        {siteConfig.shortName} Staycation
        <br />
        <span className="text-ink/50">Business account</span>
      </p>

      <div className="rounded-xl bg-white p-3">
        <QRCodeSVG
          value={siteConfig.viberUrl}
          size={132}
          bgColor="#FFFFFF"
          fgColor="#0F2538"
          level="M"
        />
      </div>

      <p className="text-[11px] text-ink/50">
        Scan to chat with us on Rakuten Viber
      </p>
    </div>
  );
}
