"use client";

import { useEffect, useRef, useState } from "react";

export default function BuildOnAutopilot() {
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
    <section className="px-6 pt-16 pb-24 sm:pt-24 sm:pb-36">
      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <h2
          className={`mb-12 text-center text-3xl font-semibold transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Build Anything on Autopilot
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* The Problem */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              The Problem
            </h3>
            <p className="text-base leading-relaxed text-gray-400">
              Most development frameworks hand your agent a technical spec and
              hope for the best. Without understanding your audience, brand, or
              business model, agents produce generic code that works on paper
              but misses the mark. You end up rewriting, redirecting, and
              micromanaging every decision — defeating the purpose of
              building with AI.
            </p>
          </div>

          {/* Why PLAID Works */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              Why PLAID Works
            </h3>
            <p className="text-base leading-relaxed text-gray-400">
              PLAID operates at a higher level of abstraction. It captures your
              vision, audience, brand, business model, and go-to-market
              strategy before a single line of code is written. Your agent
              doesn&apos;t just know what to build — it knows why, for whom, and
              how it should feel. That context is the difference between code
              that runs and a product that resonates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
