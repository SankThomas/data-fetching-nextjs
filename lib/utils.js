import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const fetchData = async (query) => {
  const data = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

  if (!data.ok) throw new Error("Could not get the requested data");

  return data.json();
};
