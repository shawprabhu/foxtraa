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

const Page = () => {
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
    setIsResending(true);
    const response = await axios.post<ApiResponse>(`/api/resend-code`, {
      username: params.username,
    })

    if (response.data.success) {
      toast({
        title: "Success",
        description: response.data.message,
      });
      setIsResendDisabled(true);
    } else {
      toast({
        title: "Error",
        description: response.data.message,
        variant: "destructive",
      });
    }
    setIsResending(false);
  }


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
      // let errorMessage = axiosError.response?.data.message;
      const errorMessage = axiosError.response?.data.message;
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8  rounded-lg shadow-sm border-2 border-gray-500 border-opacity-30 shadow-white">
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

export default Page;
