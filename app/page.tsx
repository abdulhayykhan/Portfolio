"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AboutSection,
  BackgroundLayers,
  ContactSection,
  ExperienceSection,
  HeroSection,
  LanguageDistributionCard,
  PortfolioNav,
  ProjectsSection,
  SpotlightCard,
  StackSection,
} from "@/app/components/portfolio-sections";
import { allProjects, getLanguageBreakdown, stats } from "@/app/lib/portfolio-data";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return true;
    }
    return window.localStorage.getItem("portfolio-theme") !== "light";
  });
  const [hasHydrated, setHasHydrated] = useState(false);

  const languageBreakdown = useMemo(() => getLanguageBreakdown(allProjects), []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setHasHydrated(true);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }
    window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [hasHydrated, isDark]);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".terminal-card-3d"));
    let detachListeners: Array<() => void> = [];

    const resetCard = (card: HTMLElement) => {
      card.style.setProperty("--tilt-rotate-x", "0deg");
      card.style.setProperty("--tilt-rotate-y", "0deg");
      card.style.setProperty("--tilt-z", "0px");
      card.style.setProperty("--tilt-scale", "1");
      card.style.setProperty("--tilt-glow-x", "50%");
      card.style.setProperty("--tilt-glow-y", "50%");
      card.dataset.tiltActive = "false";
    };

    const bindCard = (card: HTMLElement) => {
      const handleMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width;
        const relativeY = (event.clientY - rect.top) / rect.height;

        const clampedX = Math.min(1, Math.max(0, relativeX));
        const clampedY = Math.min(1, Math.max(0, relativeY));

        const rotateY = (clampedX - 0.5) * 12;
        const rotateX = (0.5 - clampedY) * 10;

        card.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
        card.style.setProperty("--tilt-z", "14px");
        card.style.setProperty("--tilt-scale", "1.012");
        card.style.setProperty("--tilt-glow-x", `${(clampedX * 100).toFixed(1)}%`);
        card.style.setProperty("--tilt-glow-y", `${(clampedY * 100).toFixed(1)}%`);
        card.dataset.tiltActive = "true";
      };

      const handleLeave = () => {
        resetCard(card);
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      detachListeners.push(() => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
        resetCard(card);
      });
    };

    const applyPointerMode = () => {
      detachListeners.forEach((detach) => detach());
      detachListeners = [];

      cards.forEach((card) => resetCard(card));

      if (pointerMedia.matches) {
        cards.forEach((card) => bindCard(card));
      }
    };

    applyPointerMode();

    const handlePointerChange = () => {
      applyPointerMode();
    };

    pointerMedia.addEventListener("change", handlePointerChange);

    return () => {
      pointerMedia.removeEventListener("change", handlePointerChange);
      detachListeners.forEach((detach) => detach());
    };
  }, [hasHydrated]);

  if (!hasHydrated) {
    return <div className="min-h-screen bg-[#02050b]" aria-hidden="true" />;
  }

  return (
    <div
      className={`min-h-screen selection:bg-cyan-400/30 transition-colors duration-300 ${
        isDark
          ? "terminal-theme-dark terminal-skin bg-[#02050b] text-[#9cff98]"
          : "terminal-theme-light bg-[#f4fbff] text-slate-900"
      }`}
    >
      <BackgroundLayers isDark={isDark} />

      <main className="terminal-perspective relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 md:px-8 md:py-10">
        <PortfolioNav isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />

        <HeroSection isDark={isDark} stats={stats} />

        <AboutSection isDark={isDark} />

        <section className="grid gap-4 lg:grid-cols-2">
          <ExperienceSection isDark={isDark} />
          <SpotlightCard isDark={isDark} />
          <LanguageDistributionCard isDark={isDark} languageBreakdown={languageBreakdown} />
        </section>

        <ProjectsSection isDark={isDark} projects={allProjects} />

        <StackSection isDark={isDark} />

        <ContactSection isDark={isDark} />
      </main>
    </div>
  );
}
