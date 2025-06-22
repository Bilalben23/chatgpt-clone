import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),

    email: z
        .string({ required_error: "Email is required" })
        .email("Invalid email address"),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password must be at most 100 characters"),
});


export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .nonempty("Email is required")
        .email("Invalid email address"),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
