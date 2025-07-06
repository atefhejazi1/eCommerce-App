import { z } from "zod";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is Required" }),
    lastName: z.string().min(1, { message: "Last Name is Required" }),
    email: z.string().min(1, { message: "Email Address is Required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must need at least 8 character " })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),

    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is  Required " }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password Does Not Match ",
    path: ["confirmPassword"],
  });

type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type signUpType };
