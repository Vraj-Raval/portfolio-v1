export function SiteFooter() {
  return (
    <>
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-banner">
          <div className="shell">
            <p className="eyebrow" data-reveal>05 / Contact — The next conversation</p>
            <h2 id="contact-heading" data-reveal="line">LET&apos;S MAKE<br />IT <span>HAPPEN.</span></h2>
            <a className="contact-banner-link" href="mailto:ravalvraj3000@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="shell contact-grid">
          <div className="contact-info" data-reveal="rise">
            <p className="eyebrow">Direct line / 01</p>
            <a className="contact-email" href="mailto:ravalvraj3000@gmail.com">ravalvraj3000@gmail.com <span aria-hidden="true">↗</span></a>
            <p className="contact-description">For hiring conversations or product engineering work, email me directly. I can share more context on the systems and workflows shown above.</p>
            <p className="contact-location eyebrow">Vadodara, Gujarat, India</p>
            <ul className="contact-links" aria-label="Contact links">
              <li><a href="tel:+918758227762">+91 8758227762 ↗</a></li>
              <li><a href="https://github.com/Vraj-Raval" target="_blank" rel="noreferrer">GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/vraj-raval-54790b231" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div className="contact-next" data-reveal="rise">
            <p className="eyebrow">What I work across</p>
            <ul>
              <li><span>01</span>Frontend and backend product development</li>
              <li><span>02</span>Payment and subscription workflows</li>
              <li><span>03</span>CRM, LMS, and real-time systems</li>
            </ul>
            <a className="outline-link" href="https://drive.google.com/file/d/1J4gr5U1DZomy_zx4HLD-2YFb76HnKFwo/view" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="shell footer-grid eyebrow">
          <a className="footer-brand" href="#top">VRAJ RAVAL<span aria-hidden="true"> /</span></a>
          <div className="footer-social"><a href="https://github.com/Vraj-Raval" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/vraj-raval-54790b231" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <span>© 2026 Vraj Raval</span>
          <a className="back-to-top" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
