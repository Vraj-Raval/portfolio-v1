export function About() {
  return (
    <section id="about" className="about-section shell" aria-labelledby="about-heading">
      <p className="eyebrow" data-reveal>02 / Behind the work</p>
      <div className="about-content">
        <h2 data-reveal="line" id="about-heading">A little<br />context<span className="accent">.</span></h2>
        <div className="about-copy">
          <p className="about-lead" data-reveal="rise">I enjoy solving real business problems by building scalable backend systems, intuitive user interfaces, and secure payment workflows.</p>
          <p data-reveal="rise">I have hands-on experience developing production-ready SaaS, CRM, LMS, and Fintech applications. I’m currently focused on Fintech platforms, AI-powered applications, payment systems, and scalable backend architectures using Next.js, NestJS, Prisma, Redis, and cloud technologies.</p>

          <section className="strengths experience-section" aria-labelledby="experience-heading">
            <p className="eyebrow" id="experience-heading">Professional experience</p>
            <ul className="experience-list">
              <li data-reveal="rise">
                <div className="experience-entry">
                  <div className="experience-meta"><strong>Full Stack Developer</strong><span>May 2025 – Present</span></div>
                  <p className="experience-company">The Bombay Group</p>
                  <p>Developing production-scale Fintech, SaaS, CRM, and LMS applications using Next.js, NestJS, Prisma, MySQL, Redis, and DigitalOcean. Responsible for end-to-end feature development, payment integrations, AI features, backend architecture, and deployment.</p>
                  <p className="eyebrow experience-technologies">Next.js · NestJS · Node.js · Prisma · MySQL · Redis · Stripe · DigitalOcean</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="strengths skills-section" aria-labelledby="skills-heading">
            <p className="eyebrow" id="skills-heading">Technical skills</p>
            <div className="skill-groups">
              <div className="skill-group"><h3>Frontend Development</h3><ul className="skill-list">{["Next.js", "React.js", "TypeScript", "JavaScript", "Redux"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
              <div className="skill-group"><h3>Backend Development</h3><ul className="skill-list">{["Node.js", "NestJS", "Express.js"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
              <div className="skill-group"><h3>Databases and Data Management</h3><ul className="skill-list">{["MySQL", "PostgreSQL", "Prisma ORM", "Redis"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
              <div className="skill-group"><h3>Cloud and Infrastructure</h3><ul className="skill-list">{["DigitalOcean", "Docker", "AWS"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
              <div className="skill-group"><h3>Integrations and Tools</h3><ul className="skill-list">{["Stripe", "Razorpay", "LeanX", "Google Gemini", "Google Meet API"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
              <div className="skill-group"><h3>UI and Styling</h3><ul className="skill-list">{["Material UI", "shadcn/ui", "React Bits", "Tailwind CSS"].map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
