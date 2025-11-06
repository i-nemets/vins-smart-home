"use client";
import { useEffect } from "react";

export function ChatWidget() {
  useEffect(() => {
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    if (!crispId || typeof window === "undefined") return;

    // Lazy load Crisp after idle
    const loadCrisp = () => {
      (window as Window & { $crisp?: unknown[]; CRISP_WEBSITE_ID?: string }).$crisp = [];
      (window as Window & { CRISP_WEBSITE_ID?: string }).CRISP_WEBSITE_ID = crispId;
      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.head.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadCrisp);
    } else {
      setTimeout(loadCrisp, 2000);
    }
  }, []);

  return null;
}

