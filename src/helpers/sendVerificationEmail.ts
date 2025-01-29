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
            from: "FoxTraa <admin@foxtraa.com>",
            to: email,
            subject: "FoxTraa Verification code",
            react: VerificationEmail({
                username,
                otp}),
            replyTo: "noreply@foxtraa.com",
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
 