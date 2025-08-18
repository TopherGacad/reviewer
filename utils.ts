"use client";

export const setLocalStorageWithExpiry = (key: string, value: string, ttlInMinutes: number) => {
  const now = new Date();

  const item = {
    value,
    expiry: now.getTime() + ttlInMinutes * 60 * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageWithExpiry = (key: string): string | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (e) {
    return null;
  }
};

export function shuffleArray<T>(array: T[], sampleSize?: number): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return sampleSize ? result.slice(0, Math.min(sampleSize, result.length)) : result;
}
