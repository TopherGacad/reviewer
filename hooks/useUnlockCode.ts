"use client";

import { useEffect, useState } from "react";
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry } from "@/utils";

const STORAGE_KEY = "code";
const TTL_MINUTES = 4320;

export const useUnlockCode = () => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    const stored = getLocalStorageWithExpiry(STORAGE_KEY);

    if (stored === "true") {
      setIsUnlocked(true);
    }

    setHasLoaded(true);
  }, []);

  const setUnlockCode = () => {
    setLocalStorageWithExpiry(STORAGE_KEY, "true", TTL_MINUTES);
    setIsUnlocked(true);
  };

  return { isUnlocked, setUnlockCode, hasLoaded };
};
