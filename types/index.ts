import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(2),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export const signInSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(6),
});
