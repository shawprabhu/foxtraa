import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/UserModel";
import { encryptPassword } from "@/helpers/hashedPassword";
import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await req.json();

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    const hashedPassword = await encryptPassword(password);

    if (!hashedPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Error encrypting password",
        },
        { status: 500 }
      );
    }

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
    });

    await newUser.save();

    //*send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      otp
    );

    if (!emailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResponse.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully. Verification email sent",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error creating user:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error creating user",
      },
      { status: 500 }
    );
  }
}
