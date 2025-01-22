import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="hero w-full h-[51rem] flex items-center mt-[-5rem] z-10 ">
        <div className="content flex items-center w-[55rem] ">
          <div className="head w-full p-2 ml-7">
            <h1 className="text-5xl font-bold text-white mb-4 text-logo-gradient">
              Simplify Trading 
            </h1>
            <p className="text-2xl text-white font-semibold">
              Experience a seamless approach to trading with innovative tools,
              real-time insights, and expert-curated resources designed for
              every trader
            </p>
            <Link href={"sign-up"}>
              <Button className="tracking-wide text-[1rem] bg-logo-gradient font-semibold px-6 py-2 mt-4 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
