import { MotionObserver } from "@/components/motion-observer";
import { About } from "@/components/about";
import { Introduction } from "@/components/introduction";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <MotionObserver />
      <SiteHeader />
      <main id="main"><Introduction /><SelectedWork /><About /></main>
      <SiteFooter />
    </div>
  );
}
