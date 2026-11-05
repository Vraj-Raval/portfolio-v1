const responsibilities = [
  "End-to-end feature development",
  "Payment integrations",
  "AI features",
  "Backend architecture",
  "Deployment",
];

const technologies = ["Next.js", "NestJS", "Node.js", "Prisma", "MySQL", "Redis", "Stripe", "DigitalOcean"];

export function Experience() {
  return (
    <section id="experience" className="experience-section shell" aria-labelledby="experience-heading">
      <div className="section-heading">
        <p className="section-index eyebrow" data-reveal="rule">03 / Experience</p>
        <h2 data-reveal="line" id="experience-heading">Where the<br />work <span className="accent">happens.</span></h2>
        <p className="section-note">A structured record of my professional work to date.</p>
      </div>
      <div className="experience-record" data-reveal="rise">
        <div className="experience-period"><span className="eyebrow">01 / Current role</span><time dateTime="2025-05">May 2025</time><span aria-hidden="true">↓</span><span>Present</span></div>
        <div className="experience-main">
          <p className="eyebrow">The Bombay Group / Full Stack Development</p>
          <h3>Full Stack<br />Developer<span className="accent">.</span></h3>
          <p className="experience-company">The Bombay Group</p>
          <p className="experience-description">Developing Fintech, SaaS, CRM, and LMS applications using Next.js, NestJS, Prisma, MySQL, Redis, and DigitalOcean.</p>
          <div className="experience-responsibilities"><p className="eyebrow">Responsibilities &amp; contributions</p><ul>{responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="experience-technologies"><p className="eyebrow">Working with</p><p>{technologies.join(" · ")}</p></div>
        </div>
      </div>
    </section>
  );
}
