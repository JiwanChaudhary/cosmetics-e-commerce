import Image from "next/image";
import React from "react";

type CategoryTypes = {
  img: string;
  type: string;
  quantity: string;
};

const CategoryCard = ({ img, type, quantity }: CategoryTypes) => {
  return (
    <div className="space-y-2">
      <Image src={img} alt={type} width={200} height={200} className=" rounded-full" />
      <div>
        <h2 className="text-[14px] md:text-xl font-medium">{type}</h2>
        <p className="text-gray-400 text-[12px] md:text-[14px]">{quantity}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
