"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  ListOrdered,
  Trophy,
  Swords,
  RefreshCw,
  ArrowRightLeft,
  DollarSign,
  MapPin,
  FileText,
  Users,
  Building2,
  CreditCard,
  RotateCcw,
  Database,
} from "lucide-react";

const PERFORM_NAV = [
  { href: "/", label: "Hub", icon: LayoutGrid },
  { href: "/ncaa-database", label: "Database", icon: Database },
  { href: "/big-board", label: "Big Board", icon: ListOrdered },
  { href: "/draft", label: "Draft", icon: Trophy },
  { href: "/war-room", label: "War Room", icon: Swords },
  { href: "/redraft", label: "Redraft", icon: RotateCcw },
  { href: "/coaching-carousel", label: "Coaching", icon: RefreshCw },
  { href: "/transfer-portal", label: "Portal", icon: ArrowRightLeft },
  { href: "/nil-tracker", label: "NIL", icon: DollarSign },
  { href: "/state-boards", label: "HS Boards", icon: MapPin },
  { href: "/content", label: "Content", icon: FileText },
  { href: "/analysts", label: "Analysts", icon: Users },
  { href: "/directory", label: "Directory", icon: Building2 },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
];

export default function PerFormNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-14 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <nav
          className="flex items-center gap-1 py-1.5 overflow-x-auto no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {PERFORM_NAV.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 whitespace-nowrap rounded-sm px-4 py-2 text-xs md:text-sm font-black uppercase tracking-widest transition-all shrink-0 border-b-2 ${
                  isActive
                    ? "text-emerald-800 border-emerald-600 bg-emerald-50/30"
                    : "text-slate-400 border-transparent hover:text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-3 h-3 opacity-60" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
