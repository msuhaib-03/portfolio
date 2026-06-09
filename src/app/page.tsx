import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import Hero            from "@/components/sections/Hero";
import About           from "@/components/sections/About";
import Skills          from "@/components/sections/Skills";
import Projects        from "@/components/sections/Projects";
import Experience      from "@/components/sections/Experience";
import Certifications  from "@/components/sections/Certifications";
import Contact         from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent" />
        <About />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />
        <Skills />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent" />
        <Projects />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent" />
        <Experience />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent" />
        <Certifications />

        <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
