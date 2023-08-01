import { z } from "zod";

export const newsSchema = z.object({
  title: z.string(), 
  description: z.string().optional(),
  aliases: z.string(),  
  date: z.string().optional(),
  author:  z.array(z.string()).optional().nullable(),
  category: z.array(z.string()).optional().nullable(),
  slugid:  z.string(),
  openProjectCustomFields: z
  .object({
    sourceUrl: z.string().optional(),
    cleanUrl: z.string().optional(),
  }),
  featuredImage: z
    .object({
      href: z.string().optional(),
      format: z.string().optional(),
    })
});

export const aboutUsSchema = z.object({
  title: z.string(),
  metatitle: z.string(),
  type: z.string(),
  keywords: z.string().optional().nullable(),
  description: z.string(),
  url: z.string().optional().nullable(),
  path: z.string().optional().nullable(),
  categories: z.string().optional().nullable(),
  date: z.date().optional().nullable(),
  author: z.string().optional().nullable(),
  excerpt: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  catslug: z.array(z.string()).optional().nullable(),
  category: z.array(z.string()).optional().nullable(),
  weight: z.number().optional(),
  slugid: z.string().optional().nullable(),
  layout: z.string().optional().nullable(),
})
.strict();
