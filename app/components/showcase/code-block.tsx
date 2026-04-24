"use client";

import { useState } from "react";

export function CodeBlock({ code, lang = "html" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="ks-code-wrap">
      <pre className="ks-code" data-lang={lang}>
        {code}
      </pre>
      <button
        className={`ks-copy${copied ? " is-copied" : ""}`}
        onClick={copy}
        aria-label="Copy code"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
