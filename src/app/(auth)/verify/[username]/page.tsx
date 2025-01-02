"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { verifySchema } from "@/schemas/verifySchema";
import { ApiResponse } from "@/types/ApiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Loader } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const page = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
   const [isResendDisabled, setIsResendDisabled] = useState<boolean>(false);
   const [countdown, setCountdown] = useState<number>(40);
  const [isResending, setIsResending] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams<{ username: string }>();
  const { toast } = useToast();

  //*zod implementation
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      otp: "",
    },
  });

  //*send code (timout) functionality
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isResendDisabled && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setIsResendDisabled(false);
      setCountdown(40);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isResendDisabled, countdown]);

  const handleResendCode = async () => {
    try {
      setIsResending(true);
      const response = await axios.post<ApiResponse>("/api/resend-code", {
        username: params.username,
      });

      toast({
        title: "Code Resent",
        description:
          response.data.message ||
          "Verification code has been resent to your email",
      });

      setIsResendDisabled(true);
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Failed to resend code",
        description:
          axiosError.response?.data.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };


  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>(`/api/verify-code`, {
        username: params.username,
        code: data.otp,
      });
      toast({
        title: "Success",
        description: response.data.message,
      });
      router.replace(`/sign-in`);
    } catch (error) {
      console.error("error in signing up user", error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Verify Your Account
          </h1>
          <p className="mb-4">Enter the verification code sent to your email</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <Input placeholder="otp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleResendCode}
              disabled={isResendDisabled || isResending}
              className="text-sm"
            >
              {isResending ? "Resending..." : "Resend Code"}
            </Button>
            {isResendDisabled && (
              <span className="text-sm text-gray-500">({countdown}s)</span>
            )}
            <Button className="ml-36" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Verifying
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Verify"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default page;
