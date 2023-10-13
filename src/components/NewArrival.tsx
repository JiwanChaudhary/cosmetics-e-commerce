"use client";

import * as React from "react";
import { Whisper } from "next/font/google";
import { Data } from "@/utils/ProductData";
import ProductCard from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

const NewArrival = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="container pt-32">
      <div className="text-center">
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>
          For Your Beauty
        </h3>
        <h2 className="font-semibold text-5xl">New Arrival</h2>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
          {tabsData.map((tab, index) => (
            <li
              key={tab}
              className={` ${
                activeTab === index && "text-accent"
              } cursor-pointer hover:text-accent`}
              onClick={() => handleTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {Data.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.img}
              price={product.price}
              sale={product.sale}
              name={product.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
