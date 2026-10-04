"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

// Dynamic imports for background animations (client-only, no SSR)
const MatrixRain = dynamic(
  () => import("@/components/backgrounds/MatrixRain"),
  { ssr: false }
);
const FloatingCode = dynamic(
  () => import("@/components/backgrounds/FloatingCode"),
  { ssr: false }
);
const ParticleNetwork = dynamic(
  () => import("@/components/backgrounds/ParticleNetwork"),
  { ssr: false }
);
const MouseGlow = dynamic(
  () => import("@/components/backgrounds/MouseGlow"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Background Animations */}
      <MatrixRain />
      <FloatingCode />
      <ParticleNetwork />
      <MouseGlow />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Footer />
      </div>
    </>
  );
}
