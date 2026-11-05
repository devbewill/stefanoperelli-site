import { getCollection, type CollectionEntry } from "astro:content";

export type Entry = CollectionEntry<"entries">;

const byDateDesc = (a: Entry, b: Entry) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export async function getPosts() {
  return (await getCollection("entries", ({ data }) => data.type === "post" && data.draft !== true)).sort(byDateDesc);
}

export async function getProjects() {
  return (await getCollection("entries", ({ data }) => data.type === "project" && data.draft !== true)).sort(byDateDesc);
}

export function readingTime(body: string | undefined) {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min`;
}

export function formatDate(date: Date, style: "short" | "long" = "short") {
  return date.toLocaleDateString("en-US", style === "short"
    ? { month: "short", day: "2-digit" }
    : { month: "short", day: "numeric", year: "numeric" });
}
