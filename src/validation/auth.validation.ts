import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address!!!"),
  password: z
    .string()
    .min(8, "Password Must Minimum 8 Characters Long.")
    .regex(/[a-z]/, "Password must contain at least 1 Lowercase Letter")
    .regex(/[A-Z]/, "Password must contain at least 1 Uppercase Letter")

    .regex(/[0-9]/, "Password must contain at least 1 Number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least 1 Special Character",
    ),
});

export const PatientRegistrationSchema = z.object({
  name: z
    .string("Name must be a string!!!")
    .min(3, "Name must be at least 3 characters long!!!")
    .max(50, "Name must be less than 50 characters long!!!"),
  email: z.email("Invalid email address!!!"),
  password: z
    .string()
    .min(8, "Password Must Minimum 8 Characters Long.")
    .regex(/[a-z]/, "Password must contain at least 1 Lowercase Letter")
    .regex(/[A-Z]/, "Password must contain at least 1 Uppercase Letter")

    .regex(/[0-9]/, "Password must contain at least 1 Number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least 1 Special Character",
    ),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  contactNumber: z.string().optional(),
});
