import CommunitySec from "@/components/CommunitySec";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FoxtraaDesc from "@/components/FoxtraaDesc";
import HeroSection from "@/components/HeroSection";
import { MarqueeDemo } from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import { StickyScrollRevealDemo } from "@/components/StickyScrollReveal";
import Tools from "@/components/Tools";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <>
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
      <FoxtraaDesc />
      <div className="marquee mt-4 mb-4">
        <MarqueeDemo />
      </div>

      <div className="cms w-full h-[20rem] flex justify-center items-center p-4 ">
        <CommunitySec />
      </div>

      <div className="accordian w-full flex-col  flex justify-center items-center p-4 mt-8">
        <FAQ />
      </div>

      <Separator />
      <Footer />
    </>
  );
} 
