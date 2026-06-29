"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

type Product = {
  id: number;
  name: string;
  img: string;
  category: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "کیک شکلاتی",
    img: "/pic/Screenshot_20260611_154548_Chrome.jpg",
    category: "کیک",
    price: 45000,
  },
  {
    id: 2,
    name: "کیک فرانسوی",
    img: "/pic/Screenshot_20260611_154717_Chrome.jpg",
    category: "کیک",
    price: 35000,
  },
  {
    id: 3,
    name: "کیک نسکافه",
    img: "/pic/Screenshot_20260611_154517_Chrome.jpg",
    category: "کیک",
    price: 65000,
  },
  {
    id: 4,
    name: "مینی کیک تولد",
    img: "/pic/Screenshot_20260611_153428_Chrome.jpg",
    category: "کیک",
    price: 80000,
  },
  {
    id: 5,
    name: "کیک بستنی",
    img: "/pic/Screenshot_20260611_160052_Chrome.jpg",
    category: "کیک",
    price: 30000,
  },
];

export default function Cake() {
  const { addToCart } = useCart();

  return (
    <div className=" px-4 bg-cyan-900">
      <h2 className="text-3xl font-bold text-white mb-10 text-center pt-7">
         منوی کیک‌ها
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={500}
              height={350}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>

              <p className="text-amber-600 font-bold text-lg mt-3">
                {product.price.toLocaleString()} تومان
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-5 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-bold transition"
              >
                 افزودن به سبد خرید
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}