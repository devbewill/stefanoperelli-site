import { defineCollection, z } from "astro:content";

const entries = defineCollection({
  type: "content",
  schema: z.discriminatedUnion("type", [
    // BLOG POSTS
    z.object({
      type: z.literal("post"),
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
      readingTime: z.string().optional(),
      heroImage: z.string().optional(),
    }),
    // PROJECTS / PORTFOLIO
    z.object({
      type: z.literal("project"),
      name: z.string().optional(), // nome breve del progetto (es. "Pulse")
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
      role: z.string().optional(),
      tools: z.array(z.string()).optional(),
      year: z.string().optional(),
      featured: z.boolean().optional().default(false),
      heroImage: z.string().optional(),
      // Campi opzionali della scheda progetto: si mostrano solo se presenti
      status: z.enum(["live", "off", "build", "idea"]).optional(),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
      story: z
        .object({
          problem: z.string().optional(),
          approach: z.string().optional(),
          role: z.string().optional(),
          status: z.string().optional(),
          next: z.string().optional(),
        })
        .optional(),
    }),
    // EXTERNAL LINKS / RECOMMENDATIONS
    z.object({
      type: z.literal("link"),
      typeLink: z.string().optional().default("link"),
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
      url: z.string().url(),
    }),
  ]),
});

export const collections = { entries };
