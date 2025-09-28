"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import feedbackItens from "../constants/slideFeedback";
import imageTitle from '../assets/feedback-client.png';

const FeedbackSection: React.FC = () => {
  const   containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    // feedbackItens is static in this project, keep dependency array empty to run once
  }, []);

  const scrollTo = (index: number) => {
    const el = cardRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="flex justify-center py-12">
      <div className="max-w-7xl w-full px-4">
        <div className="flex justify-center items-center">
          <Image src={imageTitle} alt="Feedback do Cliente" className="w-3xs h-3xs"/>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-7 overflow-hidden scroll-smooth snap-x snap-mandatory px-2 py-4"
            aria-label="Feedback carousel"
          >
            {feedbackItens.map((t, i) => (
              <div
                key={t.id}
                data-index={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="snap-center flex-shrink-0 w-[220px] lg:w-4xs rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <div className="relative w-full h-80">
                  <Image src={t.image} alt={t.alt ?? ""} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTo(Math.max(0, active - 1))}
            aria-label="Anterior"
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
          >
            ‹
          </button>
          <button
            onClick={() => scrollTo(Math.min(feedbackItens.length - 1, active + 1))}
            aria-label="Próximo"
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
          >
            ›
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          {feedbackItens.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-pastel-purple" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;