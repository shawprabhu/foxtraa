import { z } from "zod";

export const verifySchema = z.object({
    otp: z.string().nonempty({message: "OTP is required"}),
});