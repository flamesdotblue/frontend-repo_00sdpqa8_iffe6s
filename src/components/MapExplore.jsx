import { MapPin } from "lucide-react";

const markers = [
  { id: 1, x: "20%", y: "40%", label: "Jaipur" },
  { id: 2, x: "65%", y: "30%", label: "Varanasi" },
  { id: 3, x: "40%", y: "65%", label: "Hampi" },
  { id: 4, x: "55%", y: "80%", label: "Munnar" },
];

export default function MapExplore() {
  return (
    <section className="rounded-2xl border border-black/5 overflow-hidden bg-gradient-to-b from-sky-50 to-blue-50/40">
      <div className="p-4 border-b border-black/5">
        <h2 className="text-lg font-semibold">Explore on the map</h2>
        <p className="text-sm text-neutral-600">Tap markers to preview nearby journeys</p>
      </div>
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop"
          alt="India Map backdrop"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0">
          {markers.map((m) => (
            <button
              key={m.id}
              style={{ left: m.x, top: m.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              aria-label={m.label}
            >
              <span className="absolute -inset-4 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium shadow-sm border border-black/5">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" /> {m.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
