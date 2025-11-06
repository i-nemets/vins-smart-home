import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(6, "Укажите телефон"),
  email: z
    .string()
    .email("Укажите корректный email")
    .optional()
    .or(z.literal("")),
  service: z.enum(["smart-home", "iot", "iiot", "other"]),
  message: z.string().min(10, "Опишите задачу (от 10 символов)").max(2000),
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  referrer: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Необходимо согласие с политикой",
  }),
  hp: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
