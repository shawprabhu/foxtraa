import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* <div
        className="hero flex flex-col md:flex-row items-center justify-center  p-8 mt-4"
        style={{ minHeight: "calc(100vh - 5rem)" }}
      >
          <div className="left-sec w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-5xl font-bold text-white">
              Welcome to NextJS 15
            </h1>
            <p className="text-xl text-gray-400">
              Build modern web applications with ease using the latest features
              of Next.js 13. Fast, scalable, and developer-friendly.
            </p>
            <button className=" border-2 tracking-wide text-[1rem] bg-logo-gradient font-semibold  text-white px-6 py-2 rounded-lg  transition duration-300">
              Get Started
            </button>
          </div>
          {/* <div className="right-sec w-full md:w-1/2 mt-8 md:mt-0">
            <img
              className="w-full h-auto md:h-[60vh] object-cover rounded-lg shadow-xl"
              src="/Dashboard Management Prototype (1).png"
              alt="Hero Image"
            />
          </div>  */}
      {/* </div> */}
      <div className="hero w-full min-h-[calc(100vh-5rem)] flex items-center ">
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
