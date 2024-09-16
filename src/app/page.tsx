import {Header} from "@/sections/Header";
import {HeroSection} from "@/sections/Hero";
import {ProjectsSection} from "@/sections/Projects";
import {TapeSection} from "@/sections/Tape";
import {TestimonialsSection} from "@/sections/Testimonials";
import {AboutSection} from "@/sections/About";
import {ContactSection} from "@/sections/Contact";
import {Footer} from "@/sections/Footer";
import YandexMetrika from "@/components/Yandex";
export default function Home() {
  return (
    <div>
        <YandexMetrika />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
