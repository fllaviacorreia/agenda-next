import { z } from "zod";

export const LoginSchema = z.object({
    email: z
        .string({message: "O campo email não pode ser vazio."})
        .email({message: "Esse é um e-mail inválido."})
        .trim(),
    password: z
        .string({message: "O campo senha não pode ser vazio."})
        .min(8, { message: "Necessário possuir mínimo de 8 caracteres." })
        .trim(),
});

export type LoginState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;