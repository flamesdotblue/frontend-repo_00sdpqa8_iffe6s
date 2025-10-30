import Header from "./components/Header";
import ExperienceFeed from "./components/ExperienceFeed";
import MapExplore from "./components/MapExplore";
import { ShieldCheck, MessageSquare } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="absolute right-0 bottom-0 h-56 w-56 bg-emerald-200/40 blur-3xl rounded-full translate-x-20 translate-y-10 pointer-events-none" />
          <div className="p-6 sm:p-10 grid lg:grid-cols-2 gap-8 items-center relative">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Hyper-local experiences led by people who truly know the place
              </h1>
              <p className="text-neutral-700 text-base">
                Skip the generic tours. Meet verified Pathfinders—students, artisans, hikers, and foodies—who craft intimate journeys through their cities.
              </p>
              <div className="inline-flex items-center gap-2 bg-white border border-black/10 px-3 py-2 rounded-xl text-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Verified Pathfinder program ensures trust and safety
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  title: "Old Delhi Chaat Trail",
                  image:
                    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Hampi Temple Secrets",
                  image:
                    "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Jaipur Blue Pottery",
                  image:
                    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((c) => (
                <figure
                  key={c.title}
                  className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-3 py-2 text-sm font-medium">
                    {c.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery and Map */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <ExperienceFeed />
          </div>
          <div className="lg:col-span-1">
            <MapExplore />
          </div>
        </div>

        {/* Trust & Messaging */}
        <section className="rounded-2xl border border-black/5 p-6 bg-neutral-50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">In‑app secure messaging</h3>
              <p className="text-sm text-neutral-700">
                Coordinate details without sharing personal contact info until your booking is confirmed.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800">
              <MessageSquare className="h-4 w-4" /> Start a conversation
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-6 text-center text-sm text-neutral-600">
        Crafted for explorers across India • © {new Date().getFullYear()} Pathfinder
      </footer>
    </div>
  );
}
