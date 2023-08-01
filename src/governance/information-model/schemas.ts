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

