import { ProjectRow } from "@/components/project-row";

const projects = [
  {
    number: "01",
    title: "EOne FX CRM",
    category: "Fintech",
    tagline: "Forex CRM & Affiliate Management System",
    description: "A complete CRM platform for Forex brokers featuring lead management, affiliate systems, sales management, deposits, withdrawals, crypto investments, dashboards, reporting, and role-based access.",
    technologies: ["Next.js", "NestJS", "MySQL", "Prisma", "Redis", "Ethers.js", "Smart Contracts"],
    features: ["Role-Based Access Control", "Affiliate Management", "Lead Management", "KPI Dashboards", "Crypto Payments", "Google Meet Integration"],
    liveUrl: "https://www.eonefx.com/",
    imageAlt: "EOne FX CRM Dashboard",
  },
  {
    number: "02",
    title: "The Vervee Academy",
    category: "EdTech",
    tagline: "AI-Powered LMS Platform",
    description: "A subscription-based learning platform focused on financial literacy, featuring AI avatar generation, premium educational content, a community system, and market analysis.",
    technologies: ["Next.js", "NestJS", "MySQL", "Prisma", "Stripe", "Google Gemini"],
    features: ["Stripe Subscriptions", "Learning Modules", "MCQ Exams", "AI Avatar Generator", "Community Chat", "Market Analysis"],
    liveUrl: "https://app.theverveeacademy.com/",
    imageAlt: "The Vervee Academy Learning Platform",
  },
  {
    number: "03",
    title: "DNZUSA Request Management",
    category: "SaaS",
    tagline: "SaaS Workflow Automation",
    description: "A request management platform where users upload requests, communicate with administrators in real time, track request history, and manage file versions.",
    technologies: ["Next.js", "Node.js", "MySQL", "Prisma", "Socket.IO"],
    features: ["File Uploads", "Real-Time Chat", "Status Tracking", "Version History", "Role-Based Access Control", "Admin Dashboard"],
    liveUrl: "https://app.dznusa.com/",
    imageAlt: "DNZUSA Request Management Platform",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="work-section shell" aria-labelledby="work-heading">
      <div className="section-heading"><p className="eyebrow" data-reveal="rule">01 / Selected work</p><h2 data-reveal="line" id="work-heading">A few things<br />I’ve built<span className="accent">.</span></h2><p className="section-note">Fintech, EdTech, and SaaS products<br />built to solve real business needs.</p></div>
      <div>{projects.map((project) => <ProjectRow key={project.number} {...project} />)}</div>
    </section>
  );
}
