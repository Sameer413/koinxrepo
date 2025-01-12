import { Separator } from "@/components/ui/separator";
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white rounded-md p-10 my-10">
      <div className="text-2xl text-[#0F1629] font-semibold">About Bitcoin</div>

      <div className="mt-5">
        <div className="text-lg font-semibold">What is Bitcoin?</div>
        <div className="text-[#3e424a] font-medium mt-3">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </div>
      </div>
      <Separator className="my-5" />
      <div className="mt-5">
        <div className="text-lg font-semibold">Lorem ipsum dolor sit amet</div>
        <div className="text-[#3e424a] font-medium flex flex-col gap-3 mt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>

          <p>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>

          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
      <Separator className="my-5" />

      <div className="mt-5">
        <div className="text-lg font-semibold">Already holding Bitcoin?</div>
        <div className="text-[#3e424a] font-medium mt-3"></div>
      </div>
      <Separator className="my-5" />

      <div className="text-[#3e424a] font-medium">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </div>
    </div>
  );
};

export default AboutSection;
