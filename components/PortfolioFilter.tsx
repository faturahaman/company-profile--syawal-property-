"use client";

import { useState } from "react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import ProjectCard from "@/components/cards/ProjectCard";
import type { Project } from "@/lib/types";

export default function PortfolioFilter({
  categories,
  projects,
}: {
  categories: readonly string[];
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <FadeUp className="mb-10 sm:mb-12">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter kategori"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase select-none transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-amber-500 hover:text-amber-600 cursor-pointer hover:shadow-sm"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </FadeUp>

      <StaggerGrid
        key={activeCategory} // Ensure animation re-triggers on category change
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {filteredProjects.map((p) => (
          <StaggerItem key={p.id}>
            <ProjectCard project={p} />
          </StaggerItem>
        ))}
      </StaggerGrid>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="font-body text-slate-500">Tidak ada proyek dalam kategori ini.</p>
        </div>
      )}
    </>
  );
}
