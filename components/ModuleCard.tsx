"use client";

import Link from "next/link";

export type PModuleCard = {
  imageUrl?: string;
  title: string;
  description?: string;
  category?: string;
  href: string;
};

function getVariantClasses(variant: string) {
  switch (variant) {
    case "red":
      return "bg-red-400";
    case "cyan":
      return "bg-cyan-600";
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-[#40ac4e]";
    default:
      return "bg-gray-400";
  }
}

export default function ModuleCard({ imageUrl, title, description, category, href }: PModuleCard) {
  return (
    <Link href={href}>
      <div className="w-full overflow-hidden rounded-2xl  shadow-sm bg-cyan-600 text-white">
        <div className="h-36 w-full overflow-hidden">
          <img
            src={imageUrl ? imageUrl : "default_module_bg.svg"}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>

          {category && (
            <span className="inline-block rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium">{category}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
