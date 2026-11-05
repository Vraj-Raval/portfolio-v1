import { ProjectRow } from "@/components/project-row";

const projects = [
  {
    number: "01",
    title: "EOne FX",
    category: "Fintech / Sales CRM",
    tagline: "Forex sales operations",
    description: "A forex sales CRM covering lead lifecycle management, KYC, MT5 account workflows, bulk CSV imports, KPI dashboards, and Google Meet integration.",
    technicalNote: "Role-specific workflows for Admin, Sales Manager, and Salesperson users.",
    technologies: ["Next.js", "NestJS", "MySQL", "Prisma"],
    features: ["Lead lifecycle", "KYC", "MT5 account workflows", "Bulk CSV imports", "KPI dashboards", "Google Meet integration"],
    previewLabels: ["LEADS", "KYC", "MT5"],
    liveUrl: "https://www.eonefx.com/",
    liveLabel: "View EOne FX website",
  },
  {
    number: "02",
    title: "The Vervee Academy",
    category: "EdTech / Fintech",
    tagline: "Subscription learning platform",
    description: "A subscription-based learning platform focused on financial literacy, with premium educational content, learning modules, assessments, community features, market analysis, and AI avatar generation.",
    technicalNote: "The product combines subscription payments, learning workflows, and AI features in one platform.",
    technologies: ["Next.js", "NestJS", "MySQL", "Prisma", "Stripe", "DigitalOcean", "Google Gemini"],
    features: ["Stripe subscriptions", "Learning modules", "MCQ exams", "AI avatar generation", "Community chat", "Market analysis"],
    previewLabels: ["SUBSCRIBE", "LEARN", "COMMUNITY"],
    liveUrl: "https://app.theverveeacademy.com/",
  },
  {
    number: "03",
    title: "Wongaa FX",
    category: "Fintech / Affiliate CRM",
    tagline: "Affiliate management platform",
    description: "A fintech product organized around affiliate CRM workflows, with a Next.js frontend and NestJS services backed by MySQL and Prisma.",
    technologies: ["Next.js", "NestJS", "MySQL", "Prisma"],
    features: ["Affiliate CRM"],
    previewLabels: ["FINTECH", "AFFILIATE", "CRM"],
  },
  {
    number: "04",
    title: "DNZUSA",
    category: "SaaS / Operations",
    tagline: "Image editing request management",
    description: "An image editing request management platform for uploading requests, tracking status and file versions, and communicating with administrators in real time.",
    technicalNote: "DigitalOcean Spaces handles files, while Socket.IO powers real-time chat.",
    technologies: ["Next.js", "Node.js", "Express", "MySQL", "DigitalOcean Spaces", "Socket.IO"],
    features: ["File uploads", "Real-time chat", "Status tracking", "Version history", "Role-based access", "Admin dashboard"],
    previewLabels: ["REQUEST", "CHAT", "VERSION"],
    liveUrl: "https://app.dznusa.com/",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="work-section shell" aria-labelledby="work-heading">
      <div className="section-heading">
        <p className="section-index eyebrow" data-reveal="rule">01 / Selected work</p>
        <h2 data-reveal="line" id="work-heading">Selected<br /><span className="accent">products.</span></h2>
        <p className="section-note">Four product environments across sales, education, affiliate operations, and request management.</p>
      </div>
      <div className="project-list">{projects.map((project) => <ProjectRow key={project.number} {...project} />)}</div>
    </section>
  );
}
