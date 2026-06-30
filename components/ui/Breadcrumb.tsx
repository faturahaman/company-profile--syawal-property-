import Link from "next/link";

interface Crumb {
  href?: string;
  label: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs text-white/50 mb-8" aria-label="Breadcrumb">
      {crumbs.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-white/80 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-amber-500 font-semibold" aria-current="page">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
