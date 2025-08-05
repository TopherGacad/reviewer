"use client";

import { modules } from "@/data/modules";
import ModuleLink from "./ModuleLink";
import { useUnlockCode } from "@/hooks/useUnlockCode";

function getVariantClasses(variant: string) {
  switch (variant) {
    case "red":
      return "bg-red-400";
    case "cyan":
      return "bg-teal-500";
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-[#40ac4e]";
    default:
      return "bg-gray-400";
  }
}

const ModuleGrid = () => {
  const { isUnlocked } = useUnlockCode();

  return (
    <div className="my-container flex flex-col gap-2 md:gap-3">
      {modules.map((group) => {
        if (!group.sets.length || (group.codeRequired && !isUnlocked)) {
          return null;
        }

        const bgClass = getVariantClasses(group.variant);

        return (
          <div
            key={group.title}
            className="w-full flex flex-col md:flex-row gap-2 md:gap-3 justify-between items-center"
          >
            {group.sets.map((set) => (
              <ModuleLink
                key={set.href}
                href={set.href}
                title={group.title}
                label={set.label}
                items={set.items}
                textClass={set.textClass}
                bgClass={bgClass}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ModuleGrid;
