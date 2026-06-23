"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaCoffee,
  FaBirthdayCake,
  FaIceCream,
} from "react-icons/fa";
import { IconType } from "react-icons";

type Product = {
  id: number;
  name: string;
  category: string;
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

  const Iteam: MenuItem[] = [
    { id: 1, name: "غذا", Icon: FaUtensils, url: "#food" },
    { id: 2, name: "نوشیدنی‌ها", Icon: FaCoffee, url: "#drinks" },
    { id: 3, name: "کیک", Icon: FaBirthdayCake, url: "#cakes" },
    { id: 4, name: "بستنی", Icon: FaIceCream, url: "#icecream" },
  ];

  const products = [
    { id: 1, name: "Cappuccino", category: "نوشیدنی گرم" },
    { id: 2, name: "Ice Cream Mix", category: "نوشیدنی سرد" },
    { id: 3, name: "Sandwich", category: "غذا" },
    { id: 4, name: "Neskafe Cake", category: "دسر" },
    { id: 5, name: "Latte", category: "نوشیدنی گرم" },
    { id: 6, name: "Mocha", category: "نوشیدنی گرم" },
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

  return (
    <div className="min-h-screen py-6 md:py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* SEARCH BOX */}
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          
          <div className="flex items-center justify-center text-gray-500 px-3">
            <FiSearch size={22} />
          </div>

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

        {/* RESULTS */}
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
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                      {product.name}
                    </span>

                    <span className="text-xs md:text-sm text-black bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* NOT FOUND */}
        {searchTerm && searchResults.length === 0 && (
          <div className="mt-6 text-center py-8 md:py-10 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-400 text-sm md:text-lg">
              محصولی با نام "{searchTerm}" پیدا نشد
            </p>
          </div>
        )}

        {/* MENU GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-10 max-w-4xl mx-auto px-2 md:px-4 mt-10 md:mt-30">
          {Iteam.map((item) => (
            <motion.div
              key={item.id}
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
          ))}
        </div>
      </div>
    </div>
  );
}