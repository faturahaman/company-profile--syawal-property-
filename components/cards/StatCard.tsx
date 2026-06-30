import { AnimatedCounter } from "@/components/ui/Motion";
import type { StatItem } from "@/lib/types";

export default function StatCard({ value, label }: StatItem) {
  return (
    <div className="flex flex-col gap-2 p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
      <AnimatedCounter
        value={value}
        className="font-heading text-4xl sm:text-5xl font-bold text-amber-500 leading-none tracking-tight drop-shadow-sm"
      />
      <span className="font-body text-sm sm:text-base text-slate-300 font-medium">
        {label}
      </span>
    </div>
  );
}
