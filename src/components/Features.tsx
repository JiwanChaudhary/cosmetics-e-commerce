import React from "react";
import FeaturesCard from "./FeaturesCard";

const data = [
  {
    img: "/images/icon.png",
    title: "Naturally Derived",
    desc: "Neatusal and organic beauty products.",
  },
  {
    img: "/images/icon.png",
    title: "Free Shipping",
    desc: "Free shipping on all order over $50",
  },
  {
    img: "/images/icon.png",
    title: "Secure Payment",
    desc: "Fully protected by encryptions.",
  },
];

const Features = () => {
  return (
    <div className="container pt-16">
      <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <FeaturesCard
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
