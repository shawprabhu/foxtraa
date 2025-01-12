"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
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
    setIsLoading(true);
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
        toast({
          title: "SignIn failed",
          description: "Verify your account to SignIn",
          variant: "destructive",
        });
        router.replace(`/verify/${errData.username}`);
        return;
      }
      if (errData.message === "CredentialsSignin") {
        toast({
          title: "SignIn failed",
          description: "Invalid credentials",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: result.error,
          variant: "destructive",
        });
      }
    }
    toast({
      title: "Success",
      description: "Signed in successfully ",
    })
    if (result?.url) {
      router.replace("/dashboard");
    }
    setIsLoading(true);

  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md p-8 space-y-8  rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Foxtraa
            </h1>
            <p className="mb-4">Sign In</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
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
                    <FormMessage />
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
              Not a member yet?{" "}
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
