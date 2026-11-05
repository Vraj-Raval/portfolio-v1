import { SectionNavigation } from "@/components/section-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
export function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner"><a className="wordmark" href="#top" aria-label="Back to introduction">VR<span className="accent">/</span><span className="wordmark-name">VRAJ RAVAL</span></a><SectionNavigation /><ThemeToggle /></div></header>;
}
