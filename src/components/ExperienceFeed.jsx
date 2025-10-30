import { useMemo, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import CategoryChips from "./CategoryChips";

const data = [
  {
    id: 1,
    category: "history",
    title: "Secret Temples of Hampi",
    host: "Aarav | History grad",
    rating: 4.9,
    duration: "3 hrs",
    groupSize: 8,
    price: "₹1200",
    location: "Hampi, KA",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "food",
    title: "Old Delhi Midnight Chaat Trail",
    host: "Zoya | Street food buff",
    rating: 4.8,
    duration: "2.5 hrs",
    groupSize: 10,
    price: "₹900",
    location: "Delhi, DL",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "crafts",
    title: "Blue Pottery with a Jaipur Artisan",
    host: "Meera | 3rd-gen potter",
    rating: 5.0,
    duration: "4 hrs",
    groupSize: 6,
    price: "₹1600",
    location: "Jaipur, RJ",
    verified: false,
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "nature",
    title: "Western Ghats Sunrise Hike",
    host: "Rohan | Trek leader",
    rating: 4.7,
    duration: "5 hrs",
    groupSize: 12,
    price: "₹1400",
    location: "Munnar, KL",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExperienceFeed() {
  const [active, setActive] = useState("food");

  const filtered = useMemo(
    () => data.filter((d) => d.category === active),
    [active]
  );

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Explore experiences</h2>
        <CategoryChips active={active} onChange={setActive} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
