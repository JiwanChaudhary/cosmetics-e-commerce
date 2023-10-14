import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/images/product_2.jpg",
    title: "Lorem ipsum dolor this amet",
    date: "Sep 12, 2023",
    comment: 2,
  },
  {
    img: "/images/product_2.jpg",
    title: "Lorem ipsum dolor this amet",
    date: "Sep 11, 2023",
    comment: 2,
  },
  {
    img: "/images/product_2.jpg",
    title: "Lorem ipsum dolor this amet",
    date: "Sep 14, 2023",
    comment: 2,
  },
];

const BlogSection = () => {
  return (
    <div className=" container pt-32 text-center">
      <h2 className=" font-bold text-2xl">Latest News</h2>
      <p className=" text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
