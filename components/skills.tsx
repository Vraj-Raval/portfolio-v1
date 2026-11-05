const groups = [
  { title: "Frontend Development", skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS"] },
  { title: "Backend Development", skills: ["Node.js", "NestJS", "Express.js"] },
  { title: "Databases and Data Management", skills: ["MySQL", "PostgreSQL", "Prisma ORM", "Redis"] },
  { title: "Cloud and Infrastructure", skills: ["DigitalOcean", "DigitalOcean Spaces", "Docker", "AWS"] },
  { title: "Payments and Integrations", skills: ["Stripe", "Razorpay", "LeanX", "Google Gemini", "Google Meet API", "Socket.IO"] },
  { title: "UI and Styling", skills: ["Material UI", "shadcn/ui", "React Bits"] },
];

export function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="shell">
        <div className="section-heading">
          <p className="section-index eyebrow" data-reveal="rule">04 / Technical index</p>
          <h2 data-reveal="line" id="skills-heading">Technical<br /><span className="accent">range.</span></h2>
          <p className="section-note">The tools behind the product work, grouped by the problems they help solve.</p>
        </div>
        <div className="skill-index">
          {groups.map((group, index) => (
            <div className="skill-row" key={group.title} data-reveal="rise">
              <span className="skill-number eyebrow">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul aria-label={`${group.title} technologies`}>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <span className="skill-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
