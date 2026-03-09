"use client";

import { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import Community from "@/components/Community";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-deep-space" />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen cosmic-bg">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <ThreeScene mousePosition={mousePosition} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
        <Community />
        
        {/* Footer */}
        <footer className="py-8 text-center text-starlight-gray">
          <p className="font-space-mono text-sm">
            © 2026 COSMIC. All rights reserved. To the moon! 🚀
          </p>
        </footer>
      </div>
    </main>
  );
}
