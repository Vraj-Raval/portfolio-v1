"use client";
import { Within } from "@theme-toggles/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let choice: string | null = null;
      try { choice = localStorage.getItem("portfolio-theme"); } catch {}
      const nextTheme = choice === "dark" || (choice !== "light" && preference.matches) ? "dark" : "light";
      document.documentElement.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };
    preference.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => { preference.removeEventListener("change", sync); window.removeEventListener("storage", sync); };
  }, []);
  function toggle() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try { localStorage.setItem("portfolio-theme", nextTheme); } catch {}
  }
  return (
    <Within
      toggled={theme === undefined ? undefined : theme === "dark"}
      onClick={toggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    />
  );
}
