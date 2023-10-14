"use client";

import * as React from "react";
import { Whisper } from "next/font/google";
import { Data } from "@/utils/ProductData";
import ProductCard from "./ProductCard";

type ProductTypes = {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean;
};

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

const NewArrival = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [data, setData] = React.useState<typeof Data>([]);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLocaleLowerCase();
    setActiveTab(index);

    // all category
    if (category === "all") {
      setData(randomSuffle(Data).slice(0, 4));
      // setData(randomSuffle(Data));
      return;
    }

    // specified category
    const filterData = Data.filter((item) => item.category.includes(category));
    setData(randomSuffle(filterData));
  };

  const randomSuffle = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  React.useEffect(() => {
    // setData(randomSuffle(Data).slice(0, 4));
    setData(randomSuffle(Data));
  }, []);

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
        <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {data.map((product: ProductTypes, index: number) => (
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
