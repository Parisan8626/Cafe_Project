"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaCoffee,
  FaBirthdayCake,
  FaIceCream,
} from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";
import { IconType } from "react-icons";
import Link from "next/link";


type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

type MenuItem = {
  id: number;
  name: string;
  Icon: IconType;
  url: string;
};


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const { addToCart, totalItems } = useCart();

  
  const Iteam: MenuItem[] = [
    { id: 1, name: "غذا", Icon: FaUtensils, url: "/Food" },
    { id: 2, name: "نوشیدنی‌ها", Icon: FaCoffee, url: "/Drink" },
    { id: 3, name: "کیک", Icon: FaBirthdayCake, url: "/Cake" },
    { id: 4, name: "بستنی", Icon: FaIceCream, url: "/Ice" },
  ];

  const products: Product[] = [
    { id: 1, name: "Cappuccino", category: "نوشیدنی گرم", price: 45000 },
    { id: 2, name: "Ice Cream Mix", category: "نوشیدنی سرد", price: 35000 },
    { id: 3, name: "Sandwich", category: "غذا", price: 65000 },
    { id: 4, name: "Neskafe Cake", category: "دسر", price: 30000 },
    { id: 5, name: "Latte", category: "نوشیدنی گرم", price: 50000 },
    { id: 6, name: "Mocha", category: "نوشیدنی گرم", price: 55000 },
  ];

  
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.category.includes(value)
    );

    setSearchResults(results);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  
  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen py-6 md:py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            محصولات کافه ما
          </h1>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            type="text"
            placeholder="دنبال چی میگردی؟..."
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="flex-1 py-3 px-2 text-gray-700 outline-none bg-transparent text-base md:text-lg"
          />
          <button
            onClick={() => console.log(searchTerm)}
            className="bg-amber-600 hover:bg-amber-800 text-white px-4 md:px-6 py-2 rounded-xl transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            جستجو
          </button>
        </div>

        
        {searchResults.length > 0 && (
          <div className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-3 md:p-4 border-b border-gray-100">
              <span className="text-xs md:text-sm text-gray-500">
                {searchResults.length} نتیجه پیدا شد
              </span>
            </div>

            <ul className="divide-y divide-gray-100">
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className="p-3 md:p-4 hover:bg-amber-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-gray-800 text-sm md:text-base">
                        {product.name}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500 mr-2">
                        {product.price.toLocaleString()} تومان
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-black bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      
                    
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full transition"
                      >
                        سفارش
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        
        {searchTerm && searchResults.length === 0 && (
          <div className="mt-6 text-center py-8 md:py-10 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-400 text-sm md:text-lg">
              محصولی با نام "{searchTerm}" پیدا نشد
            </p>
          </div>
        )}

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-10 max-w-4xl mx-auto px-2 md:px-4 mt-10">
  {Iteam.map((item) => (
    <Link key={item.id} href={item.url}>
      <motion.div
        whileHover={{ scale: 1.05, y: -6 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-amber-900 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 text-center cursor-pointer"
      >
        <div className="w-14 h-14 md:w-20 md:h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md">
          <item.Icon className="text-2xl md:text-4xl text-black" />
        </div>

        <h3 className="mt-3 md:mt-4 text-base md:text-xl font-bold text-amber-600">
          {item.name}
        </h3>
      </motion.div>
    </Link>
  ))}
</div>
      </div>
    </div>
  );
}