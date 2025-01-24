import { resend } from "@/lib/resend"; 
import VerificationEmail from "@/emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    otp: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: "admin@foxtraa.com",
            to: email,
            subject: "Verification code || Foxtraa",
            react: VerificationEmail({
                username,
                otp})
        })

        return {
            success: true,
            message: "Verification email sent successfully",
        }
    } catch (error) {
        console.log("error sending verification email", error);
        return {
            success: false,
            message: "Failed to send verification email",
        }
    }
    
}  
 