import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { RiNewspaperFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { IconType } from "react-icons";

const Item = ({
  color,
  Icon,
  iconBgColor,
}: {
  color: string;
  Icon: IconType;
  iconBgColor: string;
}) => {
  return (
    <div className={`bg-[${color}] p-4 rounded-md flex gap-2 lg:min-w-[50%] min-w-[80%] lg:w-1/2`}>
      <div className="">
        <div className={`bg-[${iconBgColor}]`}>
          <Icon className={`bg-[${iconBgColor}] h-7`} />
        </div>
      </div>
      <div className="">
        <div className="text-[#191c1f] font-semibold text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </div>
        <div className="text-[#191c1f] lg:text-sm text-xs">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </div>
      </div>
    </div>
  );
};

const SentimentSection = () => {
  return (
    <div className="bg-white rounded-md p-5 lg:p-10 my-10">
      <div className="text-2xl text-[#0F1629] font-semibold">Tokenomics</div>

      <div className="flex items-center gap-1">
        <span className="text-[#44475B] font-semibold">Key Events</span>{" "}
        <FaCircleInfo color="#44475B" />
      </div>

      <div className="flex items-center gap-5 mt-4 overflow-x-scroll">
        <Item
          color={"#e8f4fd"}
          Icon={RiNewspaperFill}
          iconBgColor={"#0082ff"}
        />
        <Item color={"#ebf9f4"} Icon={BsGraphUpArrow} iconBgColor={"#0fba83"} />
      </div>
    </div>
  );
};

export default SentimentSection;
