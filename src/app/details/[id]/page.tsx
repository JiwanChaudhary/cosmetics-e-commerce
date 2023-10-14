"use client";

import { Data } from "@/utils/ProductData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

import { MdCompareArrows } from "react-icons/md";

type DetailPageProps = {
  id: string;
};

type ProductCardProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean | undefined;
};

const DetailPage = ({ params }: { params: DetailPageProps }) => {
  const [productData, setProductData] = React.useState<ProductCardProps[]>([]);
  const id = Number(params.id);

  useEffect(() => {
    setProductData(Data.filter((item) => item.id === id));
  }, []);

  return (
    <div className=" pt-8">
      <div className=" bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href={"/"} className=" cursor-pointer hover:text-accent">
            Home
          </Link>

          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className=" capitalize">{productData[0]?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{productData[0]?.name}</p>
        </div>
      </div>

      {/* grid */}
      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* left */}
          <div>
            <Image
              src={productData[0]?.img}
              alt={productData[0]?.name}
              width={1000}
              height={1200}
              className="w-full h-full"
            />
          </div>
          {/* right */}
          <div className=" space-y-4">
            <div className=" flex items-center text-accent">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className=" text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">
                (12 customers review)
              </p>
            </div>

            <div className="text-[#161616] space-y-6">
              <h2 className=" text-3xl font-semibold">
                {productData[0]?.name}
              </h2>
              <p className=" text-xl">${productData[0]?.price}.00</p>
            </div>

            <p className=" text-gray-500 text-[14px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              inventore, deserunt architecto rerum reiciendis hic quasi velit
              dicta pariatur sunt.
            </p>
            <p className=" text-gray-500 text-[14px]">20 in stock</p>

            <button
              type="button"
              className=" bg-accent uppercase py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black"
            >
              <AiOutlineShoppingCart className="text-[24px]" />
              Add to cart
            </button>

            <div className=" flex gap-4 items-center uppercase py-4 text-14px]">
              <div className=" flex gap-1 items-center">
                <AiOutlineHeart />
                Add to wishlist
              </div>
              <div className=" flex gap-1 items-center">
                <MdCompareArrows />
                Compare
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
