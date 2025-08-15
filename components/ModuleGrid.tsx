"use client";

import { modules } from "@/data/modules";
import { useUnlockCode } from "@/hooks/useUnlockCode";
import ModuleCard from "./ModuleCard";

const ModuleGrid = () => {
  const { isUnlocked } = useUnlockCode();

  const visibleModules = modules.filter((m) => !(m.codeRequired && !isUnlocked));

  if (!visibleModules.length) {
    return <div className="my-container text-sm text-gray-500">No modules available.</div>;
  }

  return (
    <div className="my-container">
      <div className="grid grid-cols-1 gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleModules.map((mod) => {
          return (
            <ModuleCard
              key={mod.href}
              href={mod.href}
              title={mod.title}
              description={mod.items}
              category={mod.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ModuleGrid;
