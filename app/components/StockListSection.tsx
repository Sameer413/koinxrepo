"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const StockItem = ({
  symbol,
  image,
  price,
  chart,
}: {
  symbol: string;
  image: string;
  price: number;
  chart?: string;
}) => {
  function formatPrice(price: number): string {
    const priceStr = price.toFixed(6); // Ensure 6 decimal places
    return priceStr.length > 6 ? priceStr.slice(0, 6) : priceStr;
  }

  return (
    <div className="border border-[#e3e3e3] rounded-md p-4 w-250 flex-grow">
      <div className="flex items-center gap-2 mb-2 w-full">
        <Image
          src={image || "/placeholder.png"}
          alt={symbol}
          height={24}
          width={24}
          objectFit="contain"
        />
        <span className="text-sm font-semibold">{symbol.toUpperCase()}</span>
      </div>
      <div className="text-lg font-medium text-[#171717]">
        ${formatPrice(price)}
      </div>
      {chart ? (
        <div className="mt-2">
          <Image
            src={chart}
            alt={`${symbol} chart`}
            width={400}
            height={60}
            objectFit="cover"
          />
        </div>
      ) : (
        <div className="mt-2 text-gray-400 text-sm">Chart unavailable</div>
      )}
    </div>
  );
};

const StockListSection = () => {
  const [trendingData, setTrendingData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from /search/trending API
    const fetchTrendingCryptos = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        ); // Replace with actual API URL if different

        // Get the top 3 trending cryptos

        setTrendingData(response.data?.coins);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCryptos();
  }, []);

  return (
    <div className="bg-white rounded-md p-10 mt-10">
      <div className="text-2xl text-[#0F1629] font-semibold mb-4">
        You May Also Like
      </div>
      <div className="flex gap-4 overflow-x-auto w-full">
        {trendingData.length > 0 ? (
          trendingData.map((crypto, idx) => (
            <StockItem
              key={idx}
              chart={crypto.item.data?.sparkline}
              image={crypto.item.small}
              symbol={crypto.item.symbol}
              price={crypto.item.data?.price || 0}
            />
          ))
        ) : (
          <div className="text-gray-500">No trending data available</div>
        )}
      </div>

      <div className="text-2xl text-[#0F1629] font-semibold mb-4">
        Trending Coins
      </div>
      <div className="flex gap-4 overflow-x-auto w-full">
        {trendingData.length > 0 ? (
          trendingData.map((crypto, idx) => (
            <StockItem
              key={idx}
              chart={crypto.item.data?.sparkline}
              image={crypto.item.small}
              symbol={crypto.item.symbol}
              price={crypto.item.data?.price || 0}
            />
          ))
        ) : (
          <div className="text-gray-500">No trending data available</div>
        )}
      </div>
    </div>
  );
};

export default StockListSection;
