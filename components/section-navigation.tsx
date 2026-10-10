"use client";
import { useEffect, useState } from "react";

export function SectionNavigation() {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = ["intro", "work", "about", "contact"].map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <nav aria-label="Main navigation">{["work", "about", "contact"].map((id, index) => <a key={id} href={"#" + id} aria-current={active === id ? "location" : undefined}><span className="nav-number">0{index + 1}</span>{id}<span className="nav-marker" aria-hidden="true" /></a>)}</nav>;
}
