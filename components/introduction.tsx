import Image from "next/image";

export function Introduction() {
  return (
    <section id="intro" className="introduction shell" aria-labelledby="intro-heading">
      <div className="intro-top hero-meta">
        <p className="eyebrow">Personal portfolio / developer</p>
        <p className="placeholder-note">Content placeholders · replace before publishing</p>
      </div>
      <div className="hero-layout">
        <div className="hero-text">
          <div className="hero-composition">
            <h1 id="intro-heading" aria-label="[Your name]">
              <span className="headline-mask"><span className="headline-line">[Your</span></span>
              <span className="headline-mask headline-offset"><span className="headline-line">name<span className="accent">.</span>]</span></span>
            </h1>
          </div>
          <div className="intro-bottom">
            <p className="eyebrow intro-index hero-support"><span aria-hidden="true">↓</span> A closer look</p>
            <div className="intro-description">
              <p className="hero-support">[A short introduction to the kind of software you build, what you care about, and what makes your approach your own.]</p>
              <div className="hero-actions hero-actions-enter">
                <a className="action-link" href="#work" data-magnetic>Explore selected work <span aria-hidden="true">↘</span></a>
                <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of the portfolio owner seated outdoors by a river"
              fill
              sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 900px) 480px, (max-width: 1552px) 36vw, 520px"
              preload
              className="portrait-image"
            />
          </div>
          <figcaption className="portrait-caption"><span className="eyebrow">Personal / portrait</span><span className="eyebrow">01</span></figcaption>
          <div className="hero-stamp" aria-hidden="true"><span>PERSONAL</span><span className="stamp-symbol">↗</span><span>PORTFOLIO / 01</span></div>
        </figure>
      </div>
      <div className="hero-baseline"><span className="eyebrow">Ideas / Code / Interface</span><span className="eyebrow">Scroll to explore</span></div>
    </section>
  );
}
