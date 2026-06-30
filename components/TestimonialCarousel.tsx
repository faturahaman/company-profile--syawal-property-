"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/cards/TestimonialCard";
import type { TESTIMONIALS } from "@/lib/data";

type Testimonial = typeof TESTIMONIALS[number];

export default function TestimonialCarousel({ testimonials }: { testimonials: readonly Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10 h-[500px] sm:h-[450px] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
        <AnimatePresence mode="popLayout" custom={direction}>
          {testimonials.map((t, index) => {
            // Calculate distance from center
            // e.g. if current is 2, index 2 is 0. index 3 is 1. index 1 is -1.
            let diff = index - currentIndex;
            const length = testimonials.length;

            // Normalize diff to be between -2 and 2 (assuming 5 items)
            if (diff > Math.floor(length / 2)) diff -= length;
            if (diff < -Math.floor(length / 2)) diff += length;

            const isCenter = diff === 0;

            // If it's too far (like diff = 2 or -2), hide it or make it very small
            // We'll show the center, and 1 on each side.
            const isActive = Math.abs(diff) <= 1;
            if (!isActive) return null;

            return (
              <motion.div
                key={t.name} // Assuming name is unique
                custom={direction}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: direction > 0 ? 100 : -100,
                  zIndex: 0,
                }}
                animate={{
                  opacity: isCenter ? 1 : 0.5,
                  scale: isCenter ? 1 : 0.85,
                  x: diff * 120, // 120px offset for side items
                  zIndex: isCenter ? 10 : 5,
                  rotateY: diff * -15, // tilt side items towards center
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: direction > 0 ? -100 : 100,
                  zIndex: 0,
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute w-full sm:w-[500px]"
                style={{ perspective: 1000 }}
              >
                {/* Pointer events only on center item */}
                <div className={isCenter ? "pointer-events-auto shadow-2xl" : "pointer-events-none"}>
                  <TestimonialCard {...t} />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all shadow-md"
          aria-label="Testimoni Sebelumnya"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all shadow-md"
          aria-label="Testimoni Selanjutnya"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
