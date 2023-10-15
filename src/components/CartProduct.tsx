import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import React from "react";
import { RxCross1 } from "react-icons/rx";

type PropsType = {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
};

const CartProduct: React.FC<PropsType> = ({
  id,
  name,
  img,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className=" flex justify-between items-center">
      <div className=" flex items-center gap-4">
        <Image
          className="h-[80px]"
          src={img}
          alt={name}
          height={80}
          width={100}
        />
        <div className=" space-y-2">
          <h3 className=" font-medium">{name}</h3>
          <p className=" text-gray-600 text-[14px]">
            {quantity} * ${price}.00
          </p>
        </div>
      </div>
      <RxCross1
        className=" cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
