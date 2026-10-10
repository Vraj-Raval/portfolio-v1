import Image from "next/image";
import { LocalClock } from "@/components/local-clock";

export function Introduction() {
  return (
    <section
      id="intro"
      className="introduction shell"
      aria-labelledby="intro-heading"
    >
      <div className="intro-top hero-meta">
        <p className="eyebrow">Full Stack Developer</p>
        <div className="hero-meta-side">
          <p className="profile-location">Vadodara, Gujarat, India</p>
          <span className="hero-meta-divider" aria-hidden="true" />
          <LocalClock />
        </div>
      </div>
      <div className="hero-layout">
        <div className="hero-text">
          <div className="hero-composition">
            <h1 id="intro-heading" aria-label="VRAJ RAVAL">
              <span className="headline-mask">
                <span className="headline-line">VRAJ</span>
              </span>
              <span className="headline-mask headline-offset">
                <span className="headline-line">
                  RAVAL<span className="accent">.</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="intro-bottom">
            <div className="intro-description">
              <p className="hero-support">
                Full Stack Developer building production-ready SaaS, CRM, LMS,
                and Fintech applications through scalable backend systems,
                intuitive interfaces, and secure payment workflows.
              </p>
              <div className="hero-actions hero-actions-enter">
                <a className="text-link" href="#work">
                  Explore selected work <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link" href="#contact">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="action-link resume-link"
                  href="https://drive.google.com/file/d/1J4gr5U1DZomy_zx4HLD-2YFb76HnKFwo/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3" />
                  </svg>
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Vraj Raval"
              fill
              sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 900px) 480px, (max-width: 1552px) 36vw, 520px"
              preload
              className="portrait-image"
            />
            <span className="portrait-monogram" aria-hidden="true">
              <span>VR</span>
              <span className="portrait-monogram-caption">01 / INDIA</span>
            </span>
          </div>
          <figcaption className="portrait-caption">
            <span className="eyebrow">Vraj Raval / Developer</span>
            <span className="eyebrow">01</span>
          </figcaption>
          <div className="hero-stamp" aria-hidden="true">
            <span>FULL STACK</span>
            <span className="stamp-symbol">↗</span>
            <span>DEVELOPER / 01</span>
          </div>
        </figure>
      </div>
      <div className="hero-baseline">
        <span className="eyebrow">SaaS / Fintech / Full Stack</span>
        <span className="eyebrow">Scroll to explore</span>
      </div>
    </section>
  );
}
