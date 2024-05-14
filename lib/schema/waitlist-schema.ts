import { z } from "zod";

export const waitlistFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export type WaitListFormValues = z.infer<typeof waitlistFormSchema>;
