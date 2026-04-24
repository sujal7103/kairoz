"use client";

import { useState } from "react";
import { DeviceFrame } from "./device-frame";

type Variant = "mobile" | "tablet" | "desktop";

export function ResponsivePreview({
  children,
  defaultVariant = "desktop",
  url,
}: {
  children: React.ReactNode;
  defaultVariant?: Variant;
  url?: string;
}) {
  const [variant, setVariant] = useState<Variant>(defaultVariant);

  return (
    <div>
      <div className="kairoz-segmented" style={{ marginBottom: 16 }}>
        {(["mobile", "tablet", "desktop"] as const).map((v) => (
          <button
            key={v}
            className={`kairoz-segmented-item${variant === v ? " is-active" : ""}`}
            onClick={() => setVariant(v)}
          >
            {v[0].toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "24px 0", overflow: "auto" }}>
        <DeviceFrame variant={variant} url={url}>
          {children}
        </DeviceFrame>
      </div>
    </div>
  );
}
