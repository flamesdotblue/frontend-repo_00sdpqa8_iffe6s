import { Utensils, Mountain, Palette, Landmark } from "lucide-react";

const categories = [
  { key: "food", label: "Food Walks", icon: Utensils },
  { key: "nature", label: "Nature Trails", icon: Mountain },
  { key: "crafts", label: "Art & Crafts", icon: Palette },
  { key: "history", label: "History & Heritage", icon: Landmark },
];

export default function CategoryChips({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onChange?.(key)}
          className={
            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-colors " +
            (active === key
              ? "bg-emerald-600 border-emerald-600 text-white"
              : "bg-white/80 border-black/10 hover:bg-black/5")
          }
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
}
