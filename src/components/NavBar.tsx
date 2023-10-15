import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";

type NavbarProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setShowCart }: NavbarProps) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <nav className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        {/* show menu only in small devices */}
        <RxHamburgerMenu className="sm:hidden text-[26px]" />
        {/* logo */}
        <Link href="/" className="text-4xl font-semibold hover:text-accent">
          Logo
        </Link>
        {/* nav items */}
        <ul className="gap-6 hidden sm:flex">
          <Link href="/" className="navLink">
            Home
          </Link>
          <li className="navLink">Shop</li>
          <li className="navLink">Blog</li>
          <li className="navLink">Pages</li>
          <li className="navLink">Contact</li>
        </ul>

        {/* profile and cart */}
        <div className="flex gap-6 text-[26px]">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <div className="a absolute top-[-10px] right-[-10px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-[14px] grid place-items-center">
              {cartCount}
            </div>
          </div>
          <AiOutlineSearch />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
