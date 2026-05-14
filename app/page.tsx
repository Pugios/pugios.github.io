import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HistorySection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
