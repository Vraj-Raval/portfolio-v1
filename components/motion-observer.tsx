"use client";

import { useEffect } from "react";

// Content remains visible until a brief, one-time entrance animation begins.
export function MotionObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      let stagger = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        if (element.contains(document.activeElement)) continue;
        element.style.setProperty("--reveal-delay", `${Math.min(stagger++, 2) * 50}ms`);
        element.classList.add("is-revealing");
      }
    }, { rootMargin: "0px 0px -24px 0px" });

    const finish = (event: Event) => {
      (event.currentTarget as HTMLElement).classList.remove("is-revealing");
    };
    const stop = () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        elements.forEach(element => element.classList.remove("is-revealing"));
      }
    };

    elements.forEach(element => {
      element.addEventListener("animationend", finish);
      element.addEventListener("focusin", finish);
      observer.observe(element);
    });
    reducedMotion.addEventListener("change", stop);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", stop);
      elements.forEach(element => {
        element.removeEventListener("animationend", finish);
        element.removeEventListener("focusin", finish);
        element.classList.remove("is-revealing");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
