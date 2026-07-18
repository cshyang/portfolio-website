import Header from "@/components/Header";
import { Footer, PageSections } from "@/components/Sections";

export default function Home() {
  return (
    <div className="v2-page" id="top">
      <a className="v2-skip-link" href="#v2-content">Skip to content</a>
      <Header />
      <main id="v2-content">
        <PageSections />
      </main>
      <Footer />
    </div>
  );
}
