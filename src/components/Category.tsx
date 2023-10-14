import * as React from "react";

import { Whisper } from "next/font/google";
import CategoryCard from "./CategoryCard";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const data = [
  {
    img: "/images/product_1.jpg",
    type: "makeup",
    quantity: "(4 items)",
  },
  {
    img: "/images/product_1.jpg",
    type: "lipstick",
    quantity: "(8 items)",
  },
  {
    img: "/images/product_1.jpg",
    type: "nails",
    quantity: "(2 items)",
  },
];

const Category = () => {
  return (
    <div className="bg-[url(/images/new.jpg)] bg-no-repeat py-8 mt-32 bg-center w-[100%] h-[500px]">
      <div className="container text-center text-white">
        <h3 className={`${whisper.className} text-[40px]`}>
          Favourite Category
        </h3>
        <h2 className="text-[40px] font-medium">Top Category</h2>
        <div className="flex justify-center gap-4 md:gap-16 pt-4">
          {data.map((item) => (
            <CategoryCard
              key={item.type}
              img={item.img}
              type={item.type}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
