import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="h-48 sm:h-56 relative overflow-hidden shrink-0">
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-300" />
        <span className="absolute top-4 left-4 font-body text-[10px] font-bold uppercase tracking-[0.1em] bg-amber-500 text-slate-900 px-3 py-1.5 rounded-full shadow-md">
          {project.category}
        </span>
        {project.featured && (
          <span className="absolute top-4 right-4 font-body text-[10px] font-bold uppercase tracking-[0.08em] bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-full shadow-md">
            Unggulan
          </span>
        )}
      </div>
      <div className="p-6 border-t-[3px] border-amber-500 bg-white relative grow flex flex-col">
        <div className="absolute top-0 right-6 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-3/4 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </div>
        <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-2 leading-snug">
          {project.title}
        </h3>
        {project.description && (
          <p className="font-body text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        )}
        <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
          {project.location && (
            <div className="flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <dt className="sr-only">Lokasi</dt>
              <dd>{project.location}</dd>
            </div>
          )}
          {project.year && (
            <div className="flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
              <dt className="sr-only">Tahun</dt>
              <dd>{project.year}</dd>
            </div>
          )}
          {project.area && (
            <div className="flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 6.5l-1.5-1.5-8.5 8.5-4-4-1.5 1.5 5.5 5.5 10-10z"/></svg>
              <dt className="sr-only">Luas</dt>
              <dd>{project.area}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
