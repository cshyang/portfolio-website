import V2Header from "@/components/v2/V2Header";
import { V2Footer, V2PageSections } from "@/components/v2/V2Sections";

export default function PortfolioV2Page() {
  return (
    <div className="v2-page" id="top">
      <a className="v2-skip-link" href="#v2-content">Skip to content</a>
      <V2Header />
      <main id="v2-content">
        <V2PageSections />
      </main>
      <V2Footer />
    </div>
  );
}
