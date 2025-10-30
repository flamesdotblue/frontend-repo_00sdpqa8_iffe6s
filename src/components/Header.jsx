import { Compass, Search, ShieldCheck, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center shadow-sm">
            <Compass className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Pathfinder</span>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Find unforgettable experiences…"
              className="w-full rounded-full bg-neutral-100/80 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60 border border-transparent focus:border-emerald-400 placeholder:text-neutral-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
            <ShieldCheck className="h-4 w-4" /> Verified hosts
          </span>
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
