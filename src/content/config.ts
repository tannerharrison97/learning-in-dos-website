import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
  }),
});

const playgroups = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    schedule: z.string(),
    location: z.string(),
    ageRange: z.enum(['All ages', 'Babies (0-1)', 'Toddlers (1-3)', 'Preschool (3-5)', 'School age (5+)', 'Mixed ages']),
    whatsappLink: z.string().url().nullish(),
    howToJoin: z.string().optional(),
    nextMeetupDate: z.coerce.date().optional(),
    nextMeetupNotes: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

export const collections = { blog, playgroups };

