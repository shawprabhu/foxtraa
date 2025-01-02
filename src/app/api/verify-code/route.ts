import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, code } = await request.json();

    const decodedUsername = decodeURIComponent(username);
    const user = await UserModel.findOne({ username: decodedUsername });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 400 }
      );
    }

    const isCodeValid = user.otp === code;
    const isCodeNotExpired = new Date(user.otpExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();
      return NextResponse.json(
        {
          success: true,
          message: "Account verified successfully",
        },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification code expired",
        },
        { status: 400 }
      );
    } else {
      user.otpLimit -= 1;
      await user.save();

      return NextResponse.json(
        {
          success: false,
          message: `Invalid verification code. You have ${user.otpLimit} attempts left`,
        },
        { status: 400 }
      );

    }
  } catch (error) {
    console.error("error verifying user", error);
    return NextResponse.json(
      {
        success: false,
        message: "error verifying user",
      },
      { status: 500 }
    );
  }
}
