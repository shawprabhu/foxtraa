"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { User } from "next-auth";
import { Button } from "./ui/button";

const Navbar = () => {
    const { data: session } = useSession();
    const user: User = session?.user as User;
    
    
  return (
    <nav className="p-4 md:p-6 shadow-md backdrop-blur-md bg-transparent z-50 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">
          Foxtraa
        </a>
        {session ? (
          <>
            <Button
              className="w-full md:w-auto"
              variant="outline"
              onClick={() => signOut()}
            >
              LogOut
            </Button>
          </>
        ) : (
          <>
            <Link href={"/sign-up"}>
              <Button className="w-full md:w-auto " variant={"outline"}>
                Get Started
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
