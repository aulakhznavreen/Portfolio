import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}