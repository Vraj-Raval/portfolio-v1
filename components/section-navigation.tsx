"use client";
import { useEffect, useRef, useState } from "react";

const links = ["work", "about", "experience", "skills", "contact"] as const;

export function SectionNavigation() {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = ["intro", "work", "about", "experience", "skills", "contact"].map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    const closeOnNavigation = () => setIsOpen(false);
    const closeOnOutside = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (!menuButton.current?.contains(event.target) && !navigation.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("hashchange", closeOnNavigation);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("hashchange", closeOnNavigation);
    };
  }, [isOpen]);

  return (
    <div className="navigation-shell">
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(open => !open)}
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span className="menu-symbol" aria-hidden="true">{isOpen ? "×" : "+"}</span>
      </button>
      <nav ref={navigation} id="main-navigation" className={isOpen ? "is-open" : undefined} aria-label="Main navigation">
        {links.map((id, index) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setIsOpen(false)}>
            <span className="nav-number">0{index + 1}</span>
            <span className="nav-label">{id}</span>
            <span className="nav-arrow" aria-hidden="true">↗</span>
            <span className="nav-marker" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  );
}
