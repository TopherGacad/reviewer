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
