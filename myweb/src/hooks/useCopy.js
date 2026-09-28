import { useState } from "react";

export function useCopy(value, duration = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), duration);
    } catch {
      setCopied(false);
    }
  };

  return { copied, copy };
}