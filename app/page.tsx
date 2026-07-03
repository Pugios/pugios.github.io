import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import SkyBackdrop from "./components/SkyBackdrop";

export default function Home() {
  return (
    <main>
      <SkyBackdrop>
        <HeroSection />
        <HistorySection />
      </SkyBackdrop>
      <AboutSection />
      <ContactSection />
    </main>
  );
}
