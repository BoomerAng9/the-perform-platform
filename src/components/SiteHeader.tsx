import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold tracking-tight text-slate-950">
            PER<span className="italic text-emerald-700">|</span>FORM
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 bg-emerald-950 text-white text-[8px] font-black uppercase tracking-[0.3em] rounded-sm">
            A.I.M.S.
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/big-board"
            className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-800 transition-colors hidden md:block"
          >
            Big Board
          </Link>
          <Link
            href="/draft"
            className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-800 transition-colors hidden md:block"
          >
            Draft
          </Link>
          <Link
            href="/ncaa-database"
            className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-800 transition-colors hidden lg:block"
          >
            Database
          </Link>
          <Link
            href="/pricing"
            className="text-xs font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  );
}
