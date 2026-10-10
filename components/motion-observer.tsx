"use client";

import { useEffect } from "react";

// Content stays visible until the observer starts a finite entrance animation.
export function MotionObserver() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      let stagger = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        // Never conceal a focused control while its containing block enters.
        if (preference.matches || element.contains(document.activeElement)) continue;
        element.style.setProperty("--reveal-delay", String(Math.min(stagger++, 2) * 50) + "ms");
        element.classList.add("is-revealing");
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    const finish = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      element.classList.remove("is-revealing");
    };
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const controls = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    let frame = 0;
    const resets: (() => void)[] = [];
    controls.forEach(control => {
      let bounds: DOMRect | null = null;
      const reset = () => {
        cancelAnimationFrame(frame);
        bounds = null;
        control.style.removeProperty("--mx");
        control.style.removeProperty("--my");
      };
      const enter = () => { bounds = control.getBoundingClientRect(); };
      const move = (event: PointerEvent) => {
        if (!bounds || preference.matches || !finePointer.matches) return;
        const x = Math.max(-4, Math.min(4, (event.clientX - bounds.left - bounds.width / 2) * .035));
        const y = Math.max(-3, Math.min(3, (event.clientY - bounds.top - bounds.height / 2) * .08));
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          control.style.setProperty("--mx", x + "px");
          control.style.setProperty("--my", y + "px");
        });
      };
      control.addEventListener("pointerenter", enter);
      control.addEventListener("pointermove", move);
      control.addEventListener("pointerleave", reset);
      control.addEventListener("focus", reset);
      resets.push(() => {
        control.removeEventListener("pointerenter", enter);
        control.removeEventListener("pointermove", move);
        control.removeEventListener("pointerleave", reset);
        control.removeEventListener("focus", reset);
        reset();
      });
    });
    elements.forEach((element) => {
      element.addEventListener("animationend", finish);
      element.addEventListener("focusin", finish);
      observer.observe(element);
    });
    const stop = () => {
      if (!preference.matches) return;
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("is-revealing"));
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      resets.forEach(reset => reset());
      preference.removeEventListener("change", stop);
      elements.forEach((element) => {
        element.removeEventListener("animationend", finish);
        element.removeEventListener("focusin", finish);
        element.classList.remove("is-revealing");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
