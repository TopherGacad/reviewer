"use client";

import Link from "next/link";

export type PModuleCard = {
  imageUrl?: string;
  title: string;
  description?: string;
  category?: string;
  href: string;
  index: number;
};

const CARD_GRADIENTS = [
  "bg-gradient-to-tr from-purple-300 to-blue-600",
  "bg-gradient-to-tr from-cyan-500 to-blue-700",
  "bg-gradient-to-tr from-green-400 to-emerald-600",
  "bg-gradient-to-tr from-indigo-400 to-purple-600",
  "bg-gradient-to-tr from-teal-400 to-cyan-600",
  "bg-gradient-to-tl from-pink-300 to-rose-500",
  "bg-gradient-to-tr from-sky-400 to-indigo-500",
];

const CARD_BACKGROUNDS = ["bg_1.svg", "bg_2.svg", "bg_3.svg"];

function bgImageByIndex(i: number) {
  return CARD_BACKGROUNDS[i % CARD_BACKGROUNDS.length];
}

function gradientByIndex(i: number) {
  return CARD_GRADIENTS[i % CARD_GRADIENTS.length];
}

export default function ModuleCard({ imageUrl, title, description, index, category, href }: PModuleCard) {
  return (
    <Link href={href}>
      <div
        className={`w-full overflow-hidden rounded-md shadow-sm ${gradientByIndex(
          index
        )} hover:shadow-md transition-shadow`}
      >
        <div className="h-20 w-full overflow-hidden">
          <img
            src={bgImageByIndex(index)}
            alt={title}
            className="h-full w-full object-cover "
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>

          {description && <p className="text-sm text-black/70">{description}</p>}

          {category && (
            <span className="inline-block rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium">{category}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
