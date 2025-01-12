import CommunitySec from "@/components/CommunitySec";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { StickyScrollRevealDemo } from "@/components/StickyScrollReveal";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <div className="tls w-full flex justify-center items-center mt-5 p-3">
        <Tools />
      </div>
      <div className="cms w-full h-[20rem] flex justify-center items-center p-4">
        <CommunitySec />
      </div> */}
      <Navbar />
      <div className="relative">
        <div className="relative">
          <HeroSection />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#010101] to-transparent"></div>
        </div>

        <div className="tls w-full flex justify-center items-center mt-5 p-3 ">
          <Tools />
        </div>
      </div>

      <div className="sticky mt-4 p-4 w-full  ">
        <StickyScrollRevealDemo />
      </div>
      
      <div className="cms w-full h-[20rem] flex justify-center items-center p-4 ">
        <CommunitySec />
      </div>
    </>
  );
} 
