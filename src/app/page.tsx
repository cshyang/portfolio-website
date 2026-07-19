import Header from "@/components/Header";
import { Footer, PageSections } from "@/components/Sections";

export default function Home() {
  return (
    <div className="sk-page">
      <a className="sk-skip-link" href="#work">
        Skip to content
      </a>
      <Header />
      <main>
        <PageSections />
      </main>
      <Footer />
    </div>
  );
}
