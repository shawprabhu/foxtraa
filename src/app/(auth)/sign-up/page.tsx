"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
// import { useDebounceCallback } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@/schemas/signUpSchema";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader, Loader2 } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(""); // Immediate input value
  const [username, setUsername] = useState<string>("");
  const [usernameMessage, setUsernameMessage] = useState<string>("");
  const [isCheckingUsername, setIsCheckingUsername] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // const debounced = useDebounceCallback(setUsername, 300);
  function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const debouncedSetUsername = debounce(setUsername, 300);

   const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const value = e.target.value;
     setInputValue(value); // Update input value immediately
     debouncedSetUsername(value); // Debounce the API call
   };

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkUsernameUnique = async () => {
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          const response = await axios.get(
            `/api/check-username-unique?username=${username}`
          );
          setUsernameMessage(response.data.message);
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>;
          setUsernameMessage(
            axiosError.response?.data.message ?? "Error checking username"
          );
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkUsernameUnique();
  }, [username]);

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>("/api/sign-up", data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      router.replace(`/verify/${username}`);
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
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-sm border-2 border-gray-500 border-opacity-30 shadow-white">
          {/* SVG Icon at the top center */}
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

          {/* "Sign up" text aligned to the left */}
          <div className="text-left">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text bg-center text-base font-bold mt-2 text-logo-gradient">
              Start your trading journey with us
            </p>
          </div>

          {/* Rest of the form content remains unchanged */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[1.15rem]">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username"
                        {...field}
                        value={inputValue}
                        onChange={handleUsernameChange}
                      />
                    </FormControl>
                    {isCheckingUsername && <Loader className="animate-spin" />}
                    <p
                      className={`text-sm ${usernameMessage === "Username is unique" ? "text-green-400" : "text-red-400"}`}
                    >
                      {" "}
                      {usernameMessage}{" "}
                    </p>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[1.15rem]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email" {...field} />
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
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            <p>
              Already Subscribed!{" "}
              <Link
                href="/sign-in"
                className="text-blue-600 hover:text-blue-800"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
