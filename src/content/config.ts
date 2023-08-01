import newsCollection from "./news/_collection";

/**
 * We define collections outside of config.ts so that they can easily be removed
 * during development or need to be pulled into different Astro projects.
 */

// Astro looks for an exported `collections` instance to register collections.
// Each key of the collections object is top-level src/content/* directory.
export const collections = {
  news: newsCollection,
} as const;

export type ContentCollection = keyof typeof collections;
