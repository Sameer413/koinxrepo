import { Button } from "@/components/ui/button";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-white h-20 shadow-md flex items-center justify-center">
      <div className="w-full lg:max-w-7xl flex justify-between">
        <div className="">
          <span className="text-[#0052fe] font-bold text-2xl">Koin</span>
          <span className="text-[#f69300] font-bold text-2xl">X</span>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-base text-[#of1629] font-semibold cursor-pointer">
            Crypto Taxes
          </div>
          <div className="text-base text-[#of1629] font-semibold cursor-pointer">
            Free Tools
          </div>
          <div className="text-base text-[#of1629] font-semibold cursor-pointer">
            Resource Center
          </div>
          <Button className="bg-[#0052fe]">Get Started</Button>
        </div>
      </div>
      <div className="lg:hidden mr-5">
        <IoMdMenu size={24}/>
      </div>
    </div>
  );
};

export default Header;
