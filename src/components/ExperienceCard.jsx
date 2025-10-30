import { MapPin, Star, Users, Clock, DollarSign } from "lucide-react";

export default function ExperienceCard({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
          <MapPin className="h-3.5 w-3.5" /> {item.location}
        </div>
        {item.verified && (
          <div className="absolute right-3 top-3 text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
            Verified
          </div>
        )}
      </div>
      <div className="p-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold leading-tight line-clamp-2">{item.title}</h3>
            <p className="text-sm text-neutral-600">by {item.host}</p>
          </div>
          <div className="inline-flex items-center gap-1 text-amber-600">
            <Star className="h-4 w-4 fill-amber-400 stroke-amber-600" />
            <span className="text-sm font-medium">{item.rating}</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-600">
          <div className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{item.duration}</div>
          <div className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />Up to {item.groupSize}</div>
          <div className="inline-flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" />{item.price}</div>
        </div>
        <button className="mt-3 w-full text-center text-sm font-medium bg-neutral-900 text-white py-2 rounded-xl hover:bg-neutral-800 transition-colors">
          Book available slots
        </button>
      </div>
    </div>
  );
}
