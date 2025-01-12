import Image from "next/image";
import React from "react";
import TeamImage from "../../public/image 209.png";

const TeamItem = ({
  name,
  designation,
}: {
  name: string;
  designation: string;
}) => {
  return (
    <div className="flex items-center bg-[#e8f4fd] rounded-md w-full p-5 flex-col lg:flex-row">
      <div className="w-1/5 flex items-center justify-center flex-col gap-2">
        <div className="flex items-center justify-center">
          <Image
            src={TeamImage}
            alt=""
            objectFit="contain"
            width={100}
            className="rounded-md"
          />
        </div>
        <div className="">
          <div className="text-[15px] font-semibold text-center">{name}</div>
          <div className="text-[12px] text-center text-[#788F9B]">{designation}</div>
        </div>
      </div>
      <div className="w-4/5 text-sm">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
};

const TeamsSection = () => {
  return (
    <div className="bg-white rounded-md p-10">
      <div className="text-2xl text-[#0F1629] font-semibold">Teams</div>
      <div className="text-[rgb(62,66,74)] font-medium mt-5 leading-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </div>

      <div className="flex flex-col gap-4 mt-4 w-full">
        <TeamItem name="John Smith" designation="Designation here" />
        <TeamItem name="John Smith" designation="Designation here" />
        <TeamItem name="John Smith" designation="Designation here" />
      </div>
    </div>
  );
};

export default TeamsSection;
