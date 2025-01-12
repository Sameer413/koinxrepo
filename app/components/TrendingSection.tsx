"use client";
import axios from "axios";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const TredingItem: FC<{
  image?: string;
  name: string;
  value?: string;
  symbol?: string;
}> = ({ image, name, value,symbol }) => {
  return (
    <div className="flex justify-between items-center my-2 py-1">
      <div className="flex gap-2">
        <Image
          src={image || ""}
          alt={name}
          height={24}
          width={24}
          objectFit="contain"
        />
        <div className="text-[#0f1629] font-semibold">
          {name} ({symbol})
        </div>
      </div>
      <div className="flex gap-1 items-center bg-[#ebf9f4] p-1 rounded-md">
        <IoMdArrowDropup color="#14b079" size={22} />{" "}
        <span className="text-[#14b079]">{value}</span>
      </div>
    </div>
  );
};

const TrendingSection = () => {
  const [trendingData, setTrendingData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from /search/trending API
    const fetchTrendingCryptos = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        ); // Replace with actual API URL if different
        const data = response.data; // Assuming the response contains the trending data

        // Get the top 3 trending cryptos
        const topThree = data.coins.slice(0, 3);

        setTrendingData(topThree);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCryptos();
  }, []);

  return (
    <div className="bg-white rounded-lg p-5">
      <div className="">Trending Coins (24h)</div>

      {trendingData.map((crypto: any, index: number) => (
        <TredingItem
          name={crypto.item.name}
          image={crypto.item.small}
          value="5.56"
          key={index}
          symbol={crypto.item.symbol}
        />
      ))}
    </div>
  );
};

export default TrendingSection;
