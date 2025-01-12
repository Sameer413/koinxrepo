import React from "react";
import FrameImage from "../../public/Frame.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import TrendingSection from "./TrendingSection";

const SideSection = ({ show }: { show?: boolean }) => {
  return (
    <div className={`${show ? "lg:block hidden " : "block lg:hidden mt-5"}`}>
      <div className="bg-[#0052fe] flex flex-col items-center justify-center rounded-lg p-5 gap-5">
        <div className="text-white text-2xl text-center font-semibold">
          Get Started with KoinX for FREE
        </div>
        <div className="text-white text-sm text-center leading-5">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
        <div className="">
          <Image src={FrameImage} width={170} alt="" />
        </div>
        <div className="">
          <Button className="bg-white text-[#0F1629] hover:text-white hover:bg-[#0F1629]">
            Get Started For Free <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <TrendingSection />
      </div>
    </div>
  );
};

export default SideSection;
