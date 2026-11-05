type ProjectRowProps = {
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  previewLabels: string[];
  technicalNote?: string;
  liveUrl?: string;
  liveLabel?: string;
  repositoryUrl?: string;
};

export function ProjectRow({ number, title, category, tagline, description, technologies, features, previewLabels, technicalNote, liveUrl, liveLabel, repositoryUrl }: ProjectRowProps) {
  return (
    <article className="project-row" aria-labelledby={`project-${number}`}>
      <div className="project-header" data-reveal="rule">
        <span className="eyebrow">Selected work / {number}</span>
        <span className="eyebrow">{category}</span>
      </div>

      <div className="project-preview" data-reveal="mask" aria-hidden="true">
        <div className="preview-top eyebrow"><span>VR / PRODUCT INDEX</span><span>{number} — 04</span></div>
        <div className="preview-core">
          <span className="preview-number">{number}</span>
          <span className="preview-title">{title}</span>
        </div>
        <div className="preview-workflows">{previewLabels.map((label, index) => <span key={label}><small>0{index + 1}</small>{label}</span>)}</div>
        <div className="preview-bottom eyebrow"><span>{tagline}</span><span>{technologies[0]} / {technologies[1]}</span></div>
      </div>

      <div className="project-copy" data-reveal="rise">
        <div className="project-copy-top"><span className="project-number" aria-hidden="true">/{number}</span><span className="eyebrow">{category}</span></div>
        <h3 id={`project-${number}`}>{title}</h3>
        <p className="project-tagline">{tagline}</p>
        <div className="project-brief">
          <p className="eyebrow">What the product does</p>
          <p className="project-description">{description}</p>
        </div>
        {technicalNote && <div className="project-technical"><p className="eyebrow">Technical context</p><p>{technicalNote}</p></div>}
        <div className="project-workflows">
          <p className="eyebrow">{features.length === 1 ? "Core domain" : "Key workflows"}</p>
          <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
        <div className="project-stack">
          <p className="eyebrow">Technology in use</p>
          <ul aria-label={`${title} technology stack`}>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </div>
        {(liveUrl || repositoryUrl) && <div className="project-actions">
          {liveUrl && <a className="outline-link" href={liveUrl} target="_blank" rel="noreferrer">{liveLabel ?? "Open application"} <span aria-hidden="true">↗</span></a>}
          {repositoryUrl && <a className="text-link" href={repositoryUrl} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>}
        </div>}
      </div>
    </article>
  );
}
