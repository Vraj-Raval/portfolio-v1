export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="shell">
        <div className="section-heading">
          <p className="section-index eyebrow" data-reveal="rule">02 / Behind the work</p>
          <h2 data-reveal="line" id="about-heading">More than<br /><span className="accent">the code.</span></h2>
          <p className="section-note">How I approach practical product and engineering problems.</p>
        </div>
        <div className="about-layout">
          <div className="about-lead-block" data-reveal="rise">
            <span className="about-large-index" aria-hidden="true">02</span>
            <p className="about-lead">I enjoy solving real business problems by building scalable backend systems, intuitive user interfaces, and secure payment workflows.</p>
          </div>
          <div className="about-context">
            <p data-reveal="rise">My work spans SaaS, CRM, LMS, and Fintech applications. I currently focus on payment systems, AI-powered product features, and backend architecture, with Next.js, NestJS, Prisma, Redis, and cloud technologies in the stack.</p>
            <dl className="about-facts" data-reveal="rise">
              <div><dt className="eyebrow">Based in</dt><dd>Vadodara, Gujarat, India</dd></div>
              <div><dt className="eyebrow">Current role</dt><dd>Full Stack Developer at The Bombay Group</dd></div>
              <div><dt className="eyebrow">Current focus</dt><dd>Fintech, payment systems, AI-powered features, and backend architecture</dd></div>
            </dl>
            <a className="about-resume text-link" href="https://drive.google.com/file/d/1J4gr5U1DZomy_zx4HLD-2YFb76HnKFwo/view" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
