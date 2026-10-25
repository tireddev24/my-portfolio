import { z } from 'zod';
export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please tell me your name').max(80, 'That name is a little long'),
  email: z
    .string()
    .trim()
    .min(1, 'An email address lets me reply')
    .email("That email address doesn't look right")
    .max(160, 'That email address is too long'),
  subject: z.string().trim().max(120, 'Keep the subject under 120 characters'),
  message: z
    .string()
    .trim()
    .min(10, 'A sentence or two helps me help you')
    .max(1200, 'Please keep the message under 1200 characters'),
});

export type ContactValues = z.infer<typeof contactSchema>;
