import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-serif font-bold tracking-tight text-slate-950">
              PER<span className="italic text-emerald-700">|</span>FORM
            </span>
            <span className="text-xs text-slate-400">by A.I.M.S.</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-bold text-slate-400">
            <Link href="/pricing" className="hover:text-slate-800 transition-colors">
              Pricing
            </Link>
            <Link href="/analysts" className="hover:text-slate-800 transition-colors">
              Analysts
            </Link>
            <Link href="/content" className="hover:text-slate-800 transition-colors">
              Content
            </Link>
            <Link href="/directory" className="hover:text-slate-800 transition-colors">
              Directory
            </Link>
          </nav>
          <p className="text-xs text-slate-300">
            &copy; 2026 ACHIEVEMOR / A.I.M.S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
