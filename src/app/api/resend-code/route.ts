import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await dbConnect();
    try {
        const { username } = await req.json();

        const user = await UserModel.findOne({ username });

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 400 }
            );
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        user.otp = otp;
        user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
        await user.save();

        const emailResponse = await sendVerificationEmail(user.email,username, otp);

        if (!emailResponse.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: emailResponse.message,
                },
                { status: 500 }
            );
        }


        return NextResponse.json(
            {
                success: true,
                message: "Code sent successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.log("error in resending code ", error)
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send code",
            },
            { status: 500 }
        );
        }
    }