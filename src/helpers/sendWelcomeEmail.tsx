import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import WelcomeEmail from '@/emails/WelcomeEmail';
export async function sendWelcomeEmail(email: string, username: string): Promise<ApiResponse> {
    try {
            await resend.emails.send({
              from: "Foxtraa <admin@foxtraa.com>",
              to: email,
              subject: "Foxtraa Registration",
              react: WelcomeEmail({ username }),
              replyTo: "noreply@foxtra.com",
            });
    
            return {
                success: true,
                message: "Registration email sent successfully",
            }
        } catch (error) {
            console.log("error sending registration email", error);
            return {
                success: false,
                message: "Failed to send registration email",
            }
        }
}