"use client";

import { useEffect, useRef, useState } from "react";
import PhaseCard from "./PhaseCard";

const phases = [
  {
    number: "01",
    title: "Vision Intake",
    description:
      "An interactive conversation that captures your product idea through 8 structured sections — from your purpose and audience to tech stack and brand. Tailored suggestions at every step.",
  },
  {
    number: "02",
    title: "Document Generation",
    description:
      "Reads your vision and automatically produces a product vision doc, a full PRD, and a phased roadmap. Each document builds on the last.",
  },
  {
    number: "03",
    title: "Build Mode",
    description:
      "Executes the roadmap phase by phase, marking tasks complete and creating pull requests for review. A working, demoable product at every checkpoint.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="px-6 pt-12 pb-48 sm:pt-16 sm:pb-64">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <h2
          className={`mb-16 text-center text-3xl font-semibold transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              <PhaseCard
                number={phase.number}
                title={phase.title}
                description={phase.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
