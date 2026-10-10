export function About() {
  return (
    <section id="about" className="about-section shell" aria-labelledby="about-heading">
      <p className="eyebrow" data-reveal>02 / Behind the work</p>
      <div className="about-content"><h2 data-reveal="line" id="about-heading">A little<br />context<span className="accent">.</span></h2><div className="about-copy"><p className="about-lead" data-reveal="rise">[Your perspective on building software, in your own words.]</p><p data-reveal="rise">[Add a brief biography: your interests, how you approach development, and what you’re exploring next. Include only information you want to share publicly.]</p><div className="strengths"><p className="eyebrow">Technical focus / placeholders</p><ul><li data-reveal="rise">[Primary technical strength]</li><li data-reveal="rise">[Another area of focus]</li><li data-reveal="rise">[What you’re learning]</li></ul></div></div></div>
    </section>
  );
}
