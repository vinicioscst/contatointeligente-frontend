import { z } from "zod";

export const userRegisterSchema = z.object({
  fullName: z
    .string()
    .min(1, "O nome completo é obrigatório.")
    .min(5, "O campo deve conter, no mínimo, 5 caracteres")
    .max(255, "O campo deve conter, no máximo, 255 caracteres"),
  email: z
    .string()
    .email({ message: "Um email válido é obrigatório." })
    .max(45, "O campo deve conter, no máximo, 45 caracteres."),
  telephone: z.string().min(1, "O número é obrigatório.").min(2, "O campo deve conter 11 caracteres. Exemplo: (11) 90000-0000").max(16),
  password: z
    .string()
    .min(1, "A senha é obrigatória.")
    .min(8, "A senha precisa ter pelo menos 8 caracteres.")
    .max(120)
    .regex(/(?=.*?[A-Z])/, {
      message: "A senha precisa ter pelo menos uma letra maiúscula.",
    })
    .regex(/(?=.*?[a-z])/, {
      message: "A senha precisa ter pelo menos uma letra minúscula.",
    })

    .regex(/(?=.*?[0-9])/, {
      message: "A senha precisa ter pelo menos um número.",
    })
    .regex(/(?=.*?[#?!@$%^&*-])/, {
      message: "A senha precisa ter pelo menos um caractere especial.",
    }),
  avatar: z.string().nullish().optional(),
});

export const editUserSchema = userRegisterSchema.partial()

export const userLoginSchema = z.object({
    email: z
    .string()
    .email({ message: "Um email válido é obrigatório." }),
    password: z
    .string()
    .min(1, "A senha é obrigatória."),
});

export type TUserRegister = z.infer<typeof userRegisterSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
export type TUserEdit = z.infer<typeof editUserSchema>;
