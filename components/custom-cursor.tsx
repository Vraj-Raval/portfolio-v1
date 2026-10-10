"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const cursors = document.querySelectorAll<HTMLElement>(".custom-cursor");
    if (cursors.length === 0 || !pointer.matches || !motion.matches) return;

    const root = document.documentElement;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        cursors.forEach((cursor) => {
          cursor.style.left = event.clientX + "px";
          cursor.style.top = event.clientY + "px";
          cursor.classList.add("is-visible");
        });
      });
    };
    const over = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, summary, [role='button']")) {
        cursors.forEach((cursor) => cursor.classList.add("is-interactive"));
      }
    };
    const out = (event: PointerEvent) => {
      const target = event.relatedTarget;
      if (target instanceof Element && target.closest("a, button, summary, [role='button']")) return;
      cursors.forEach((cursor) => cursor.classList.remove("is-interactive"));
    };
    const leave = () => {
      cursors.forEach((cursor) => cursor.classList.remove("is-visible", "is-interactive"));
    };

    root.classList.add("custom-cursor-enabled");
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("custom-cursor-enabled");
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <CustomCursorVisual />
  );
}

export function CustomCursorVisual() {
  return (
    <div className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-dot" />
    </div>
  );
}
