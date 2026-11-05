import Image from "next/image";
import { LocalClock } from "@/components/local-clock";

export function Introduction() {
  return (
    <section id="intro" className="introduction shell" aria-labelledby="intro-heading">
      <div className="hero-meta eyebrow" data-reveal>
        <span>Developer portfolio / 2026</span>
        <span className="hero-meta-location">Vadodara, Gujarat, India <span aria-hidden="true">/</span> <LocalClock /></span>
      </div>

      <div className="hero-grid">
        <div className="hero-identity">
          <p className="hero-role eyebrow" data-reveal>Full Stack Developer <span aria-hidden="true">↗</span></p>
          <h1 id="intro-heading" aria-label="Vraj Raval">
            <span className="headline-mask"><span className="headline-line">VRAJ</span></span>
            <span className="headline-mask headline-second"><span className="headline-line">RAVAL<span className="accent">.</span></span></span>
          </h1>
          <div className="hero-index eyebrow" aria-hidden="true"><span>00 / Identity</span><span>Scroll to explore ↓</span></div>
        </div>

        <figure className="hero-portrait" data-reveal="mask">
          <div className="portrait-frame">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Vraj Raval"
              fill
              sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1000px) 42vw, 34vw"
              preload
              className="portrait-image"
            />
            <span className="portrait-corner eyebrow" aria-hidden="true">VR / 01</span>
          </div>
          <figcaption className="portrait-caption eyebrow"><span>Figure 01 — Vraj Raval</span><span>India / 2026</span></figcaption>
        </figure>

        <div className="hero-intro" data-reveal="rise">
          <p className="eyebrow hero-intro-label">01 / What I do</p>
          <p className="hero-deck">I build product interfaces, backend services, and the workflows between them. Currently working on Fintech, SaaS, CRM, and LMS products at The Bombay Group.</p>
          <p className="hero-proof eyebrow">Next.js <span>/</span> NestJS <span>/</span> Prisma <span>/</span> MySQL</p>
          <div className="hero-actions">
            <a className="action-link" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
            <a className="outline-link" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
          </div>
          <a className="resume-link text-link" href="https://drive.google.com/file/d/1J4gr5U1DZomy_zx4HLD-2YFb76HnKFwo/view" target="_blank" rel="noreferrer">Download resume <span aria-hidden="true">↗</span></a>
        </div>

        <a className="hero-availability" href="#experience" data-reveal="rise">
          <span className="availability-dot" aria-hidden="true" />
          <span><strong>Current role</strong><small>Full Stack Developer / The Bombay Group</small></span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
