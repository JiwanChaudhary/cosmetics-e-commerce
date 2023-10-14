import Image from "next/image";
import React from "react";

type BlogTypes = {
  img: string;
  title: string;
  date: string;
  comment: number;
};

const BlogCard = ({ img, title, date, comment }: BlogTypes) => {
  return (
    <div className="space-y-4">
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out bg-center bg-cover w-[100%] h-[200px]"
      />
      <div className=" text-accent font-medium">
        <span>{date} / </span>
        <span>{comment} Comments</span>
      </div>
      <h3 className=" font-bold text-lg">{title}</h3>
    </div>
  );
};

export default BlogCard;
