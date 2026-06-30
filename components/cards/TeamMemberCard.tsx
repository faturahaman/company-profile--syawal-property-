import Image from "next/image";
import type { TeamMember } from "@/lib/types";

export default function TeamMemberCard({ name, role, imgSrc }: TeamMember) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="h-56 sm:h-64 relative overflow-hidden">
        <Image
          src={imgSrc}
          alt={`Foto ${name}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 sm:p-6 border-t-[3px] border-amber-500 bg-white">
        <p className="font-heading font-bold text-base text-slate-900 leading-snug">{name}</p>
        <p className="font-body text-sm text-slate-500 mt-1">{role}</p>
      </div>
    </div>
  );
}
