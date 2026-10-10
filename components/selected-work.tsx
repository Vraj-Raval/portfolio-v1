import { ProjectRow } from "@/components/project-row";

const projects = [
  { number: "01", title: "[First project title]", description: "[Describe the problem this project addresses, who it serves, and the main idea behind your solution.]" },
  { number: "02", title: "[Second project title]", description: "[Describe what you built, a meaningful technical decision, and what visitors should explore.]" },
  { number: "03", title: "[Third project title]", description: "[Introduce another piece of work and explain what makes it worth a closer look.]" },
];

export function SelectedWork() {
  return (
    <section id="work" className="work-section shell" aria-labelledby="work-heading">
      <div className="section-heading"><p className="eyebrow" data-reveal="rule">01 / Selected work</p><h2 data-reveal="line" id="work-heading">A few things<br />I’ve built<span className="accent">.</span></h2><p className="section-note">[Add selected projects.<br />Keep the details specific.]</p></div>
      <div>{projects.map((project) => <ProjectRow key={project.number} {...project} />)}</div>
    </section>
  );
}
