import {z} from "zod";

export const signInSchema = z.object({
    identifier: z.string().nonempty({message: "Email or username is required"}),
    password: z.string().nonempty({message: "Password is required"})
});