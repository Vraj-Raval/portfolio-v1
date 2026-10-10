"use client";
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let choice: string | null = null;
      try { choice = localStorage.getItem("portfolio-theme"); } catch {}
      document.documentElement.dataset.theme = choice === "dark" || (choice !== "light" && preference.matches) ? "dark" : "light";
    };
    preference.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => { preference.removeEventListener("change", sync); window.removeEventListener("storage", sync); };
  }, []);
  function toggle() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.classList.add("theme-transition");
    root.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label="Switch light or dark color theme"><svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg><svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 15.5A9 9 0 0 1 8.5 4a9 9 0 1 0 11.5 11.5Z" /></svg><span className="theme-label-light">Light</span><span className="theme-label-dark">Dark</span></button>;
}
