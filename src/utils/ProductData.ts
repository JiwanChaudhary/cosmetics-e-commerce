type DataTypes = {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean;
};

export const Data = [
  {
    id: 0,
    img: "/images/product_1.jpg",
    name: "Sick Lipstick",
    price: 10,
    category: ["lipsticks"],
    sale: false,
  },
  {
    id: 1,
    img: "/images/product_1.jpg",
    name: "SKin Care",
    price: 10,
    category: ["skin care"],
    sale: true,
  },
  {
    id: 2,
    img: "/images/product_1.jpg",
    name: "No way product",
    price: 10,
    category: ["lipsticks", "makeup"],
    sale: false,
  },
  {
    id: 3,
    img: "/images/product_1.jpg",
    name: "Sick Lipstick",
    price: 13,
    category: ["lipstick", "nail & wax"],
    sale: true,
  },
  {
    id: 4,
    img: "/images/product_1.jpg",
    name: "Best Nail Polish",
    price: 10,
    category: ["nail & wax"],
    sale: false,
  },
  {
    id: 5,
    img: "/images/product_1.jpg",
    name: "Wow Lipstick",
    price: 10,
    category: ["lipsticks"],
    sale: true,
  },
]; 
