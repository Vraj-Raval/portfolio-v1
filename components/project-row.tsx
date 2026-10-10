type ProjectRowProps = {
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  imageAlt: string;
  repositoryUrl?: string;
};

export function ProjectRow({ number, title, category, tagline, description, technologies, features, liveUrl, imageAlt, repositoryUrl }: ProjectRowProps) {
  return <article className="project-row" aria-labelledby={"project-" + number}>
    <div className="project-visual" data-reveal="mask" role="img" aria-label={imageAlt}><div className="visual-caption"><span className="eyebrow">Project {number}</span><span className="eyebrow">{category}</span></div><div className="visual-grid" aria-hidden="true"><div className="visual-window"><div className="window-top"><span /><span /><span /></div><div className="window-content"><span className="visual-number">{number}</span><div className="wire-lines"><i /><i /><i /></div></div></div><span className="visual-cross">+</span></div><p className="visual-footnote">{imageAlt}</p></div>
    <div className="project-copy" data-reveal="rise"><div className="project-topline"><span className="project-number">/{number}</span><p className="eyebrow">{category}</p></div><h3 id={"project-" + number}>{title}</h3><p className="project-tagline">{tagline}</p><p className="project-description">{description}</p><details className="project-details"><summary>Explore project details <span className="detail-plus" aria-hidden="true">+</span></summary><div className="detail-content"><p className="eyebrow">Technology stack</p><ul className="project-tags" aria-label={title + " technology stack"}>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><p className="eyebrow feature-heading">Key features</p><ul className="project-feature-list">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="project-links"><a href={liveUrl} target="_blank" rel="noreferrer">Live website ↗</a>{repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}</div></div></details></div>
  </article>;
}
