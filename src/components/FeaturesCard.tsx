import Image from "next/image";
import React from "react";

type PropTypes = {
  img: string;
  title: string;
  desc: string;
};

const FeaturesCard = ({ img, title, desc }: PropTypes) => {
  return (
    <div className="flex gap-8">
      <Image
        src={img}
        alt={title}
        className="w-[10%] h-auto aspect-auto"
        width={60}
        height={60}
      />
      <div className="space-y-1">
        <h2 className="font-medium text-xl uppercase">{title}</h2>
        <p className="text-gray-600 text-[14px]">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
