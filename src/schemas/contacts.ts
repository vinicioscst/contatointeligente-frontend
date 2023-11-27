import { z } from "zod";

export const contactCreateSchema = z.object({
  fullName: z
    .string()
    .min(1, "O nome completo é obrigatório.")
    .min(5, "O campo deve conter, no mínimo, 5 caracteres")
    .max(255, "O campo deve conter, no máximo, 255 caracteres"),
  email: z
    .string()
    .email({ message: "Um email válido é obrigatório." })
    .max(45, "O campo deve conter, no máximo, 45 caracteres."),
  telephone: z
    .string()
    .min(1, "O número é obrigatório.")
    .min(2, "O campo deve conter 11 caracteres. Exemplo: (11) 90000-0000")
    .max(16),
});

export const contactEditSchema = contactCreateSchema.partial()

export type TContactCreate = z.infer<typeof contactCreateSchema>
export type TContactEdit = z.infer<typeof contactEditSchema>