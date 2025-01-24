"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
// import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/signInSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const { toast } = useToast();
  const router = useRouter();

  //*zod implementation
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });


  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsLoading(true); // Set loading state to true at the start
    try {
      const result = await signIn("credentials", {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      });

      if (result?.error) {
        const errData = JSON.parse(result.error);
        if (
          errData.message === "Please Verify your account before login" &&
          errData.username
        ) {
          toast("SignIn failed", {
            description: "Verify your account to SignIn",
          });
          router.replace(`/verify/${errData.username}`);
          return;
        }
        if (errData.message === "CredentialsSignin") {
          toast("SignIn failed", {
            description: "Invalid credentials",
          });
        }if (errData.message === "User not found") {
          toast("Failed", {
            description: "User not found",
          });
        }
         else if (errData.message === "Invalid credentials") {
          toast("Something went wrong", {
            description: result.error,
          });
        }else{
          toast("Something went wrong", {
            description: result.error,
          });
        }
        return; // Stop further execution if there's an error
      }

      // Only show success toast and redirect if result.url exists
      if (result?.url) {
        toast("Success", {
          description: "Signed in successfully",
        });
        router.replace("/dashboard");
      }
    } catch (error) {
      console.log("error in signing in user", error);
      toast("Something went wrong", {
        description: "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false); // Reset loading state in all cases
    }
  };

  // const onSubmit = async (data: z.infer<typeof signInSchema>) => {
  //   setIsLoading(true);
  //   const result = await signIn("credentials", {
  //     redirect: false,
  //     identifier: data.identifier,
  //     password: data.password,
  //   });
  //   if (result?.error) {
  //     const errData = JSON.parse(result.error);
  //     if (
  //       errData.message === "Please Verify your account before login" &&
  //       errData.username
  //     ) {
  //       // toast({
  //       //   title: "SignIn failed",
  //       //   description: "Verify your account to SignIn",
  //       //   variant: "destructive",
  //       // });
  //       toast("SignIn failed", {
  //         description: "Verify your account to SignIn"},)
  //       router.replace(`/verify/${errData.username}`);
  //       return;
  //     }
  //     if (errData.message === "CredentialsSignin") {
  //       // toast({
  //       //   title: "SignIn failed",
  //       //   description: "Invalid credentials",
  //       //   variant: "destructive",
  //       // });
  //       toast("SignIn failed", {
  //         description: "Invalid credentials"},)
  //     } else {
  //       // toast({
  //       //   title: "Something went wrong",
  //       //   description: result.error,
  //       //   variant: "destructive",
  //       // });
  //       toast("Something went wrong", {
  //         description: result.error,})
  //     }
  //   }
  //   // toast({
  //   //   title: "Success",
  //   //   description: "Signed in successfully ",
  //   // });
  //   toast("Success", {
  //     description: "Signed in successfully ",})
  //   if (result?.url) {
  //     router.replace("/dashboard");
  //   }
  //   setIsLoading(true);
  // };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md p-8 space-y-8  rounded-lg shadow-sm border-2 border-gray-500 border-opacity-30 shadow-white">
          <div className="flex justify-center">
            <svg
              width="229"
              height="96"
              viewBox="0 0 429 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="symbolGradient">
                  <stop stopColor="#00ff8f" offset="0"></stop>
                  <stop stopColor="#00a1ff" offset="1"></stop>
                </linearGradient>
              </defs>
              <g transform="translate(164.5, 6)" fill="url(#symbolGradient)">
                <path
                  d="M36.2,127.7l128.4,0.4c3.5,0,6.7-1.9,8.5-4.9l17.7-30.4c1.5-2.6-0.4-5.9-3.4-5.9L58.2,86.5c-3.5,0-6.7,1.9-8.5,4.9L7.9,163.3c-1.7,3-1.8,6.8-0.1,9.8l64.2,112c1.5,2.6,5.3,2.6,6.8,0l17.7-30.4c1.7-3,1.8-6.8,0.1-9.8L32.8,133.6C31.3,131,33.2,127.7,36.2,127.7z"
                  transform="scale(0.31765871)"
                />
                <path
                  d="M224.9,73.2l-64.6,110.9c-1.7,3-1.8,6.8-0.1,9.8l17.5,30.5c1.5,2.6,5.3,2.6,6.8,0l65.1-111.7c1.7-3,1.8-6.8,0.1-9.8l-41.3-72.1c-1.7-3-5-5-8.5-4.9L70.7,25.6c-3,0-4.9,3.3-3.4,5.9L84.7,62c1.7,3,5,5,8.5,4.9l128.4,0.4C224.6,67.4,226.4,70.7,224.9,73.2z"
                  transform="scale(0.31765871)"
                />
                <path
                  d="M292.6,148.2l-35.2-0.1c-3.5,0-6.7,1.9-8.5,4.9l-64.6,110.9c-1.5,2.6-5.3,2.6-6.8,0l-63.7-111.2c-1.7-3-5-5-8.5-4.9l-35.2-0.1c-3,0-4.9,3.3-3.4,5.9l64.2,112c1.7,3,5,5,8.5,4.9l83.2,0.2c3.5,0,6.7-1.9,8.5-4.9L296,154.1C297.5,151.5,295.6,148.3,292.6,148.2z"
                  transform="scale(0.31765871)"
                />
              </g>
            </svg>
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text bg-center text-base font-bold mt-2 text-logo-gradient">
              Be productive by Leveraging our Tools
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[1.15rem]">Email / username</FormLabel>
                    <FormControl>
                      <Input placeholder="email/username" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[1.15rem]">Password</FormLabel>
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    {showPassword ? (
                      <div className="flex gap-1 items-center">
                        <EyeOff
                          size={20}
                          onClick={() => setShowPassword(!showPassword)}
                          className="cursor-pointer text-sm"
                        />
                        <p className="text-sm ">Hide password</p>
                      </div>
                    ) : (
                      <div className="flex gap-1 items-center">
                        <Eye
                          size={20}
                          onClick={() => setShowPassword(!showPassword)}
                          className="cursor-pointer text-sm"
                        />
                        <p className="text-sm ">Show password</p>
                      </div>
                    )}
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Signing In ...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            <p>
              Not subscribed yet?{" "}
              <Link
                href="/sign-up"
                className="text-blue-600 hover:text-blue-800"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
