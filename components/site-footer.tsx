export function SiteFooter() {
  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="shell">
        <p className="eyebrow" data-reveal>03 / Get in touch</p>
        <h2 data-reveal="line" id="contact-heading">Let&apos;s Build<br />Something Great<span aria-hidden="true">↗</span></h2>
        <div className="contact-details" data-reveal>
          <div className="contact-copy">
            <p>Have a SaaS, Fintech, or full-stack product idea? Let&apos;s connect and discuss how I can help bring it to life.</p>
            <p className="contact-location">Vadodara, Gujarat, India</p>
          </div>
          <ul aria-label="Contact links">
            <li><a href="mailto:ravalvraj3000@gmail.com">ravalvraj3000@gmail.com</a></li>
            <li><a href="tel:+918758227762">+91 8758227762</a></li>
            <li><a href="https://github.com/Vraj-Raval" target="_blank" rel="noreferrer">GitHub ↗</a></li>
            <li><a href="https://linkedin.com/in/vraj-raval-54790b231" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
          </ul>
        </div>
        <div className="footer-bottom"><span>Vraj Raval / Full Stack Developer</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
      </div>
    </footer>
  );
}
