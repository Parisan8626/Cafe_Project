"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaUtensils, FaCoffee, FaBirthdayCake, FaIceCream } from "react-icons/fa";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const Iteam = [
  { 
    id: 1, 
    name: "غذا", 
    Icon : FaUtensils, 
    url: "#food",
   
  },
  { 
    id: 2, 
    name: "نوشیدنی‌ها", 
    Icon: FaCoffee, 
    url: "#drinks",
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-50"
  },
  { 
    id: 3, 
    name: "کیک", 
    Icon: FaBirthdayCake, 
    url: "#cakes",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50"
  },
  { 
    id: 4, 
    name: "بستنی", 
    Icon: FaIceCream, 
    url: "#icecream",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50"
  }
];
  const products = [
    { id: 1, name: "Cappuccino", category: "نوشیدنی گرم" },
    { id: 2, name: "Ice Cream Mix", category: "نوشیدنی سرد" },
    { id: 3, name: "Sandwich", category: "غذا" },
    { id: 4, name: "Neskafe Cake", category: "دسر" },
    { id: 5, name: "Latte", category: "نوشیدنی گرم" },
    { id: 6, name: "Mocha", category: "نوشیدنی گرم" },
  ];

  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.includes(value)
      );
      setSearchResults(results);
    }
  };

  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("جستجو برای:", searchTerm);
    
    }
  };
return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className=" bg-white rounded-2xl shadow-lg p-2 flex items-center">
          
          <div className="text-white px-3">
            <FiSearch size={24} />
          </div>

          <input
            type="text"
            placeholder="دنبال چی میگردی؟..."
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="flex-1 py-3 px-2 text-gray-700 outline-none bg-transparent text-lg"
            autoFocus
          />

          <button
            onClick={() => console.log("جستجو برای:", searchTerm)}
            className="bg-amber-600 hover:bg-amber-800 text-white px-6 py-2 rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg active:scale-95"
          >
            جستجو
          </button>
        </div>
        
        {searchResults.length > 0 && (
          <div className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <span className="text-sm text-gray-500">
                {searchResults.length} نتیجه پیدا شد
              </span>
            </div>
            <ul className="divide-y divide-gray-100">
              {searchResults.map((product) => (
                <li key={product.id} className="p-4 hover:bg-amber-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">{product.name}</span>
                    <span className="text-sm text-black bg-gray-100 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

       
        {searchTerm && searchResults.length === 0 && (
          <div className="mt-6 text-center py-10 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-400 text-lg">
               محصولی با نام "{searchTerm}" پیدا نشد
            </p>
          </div>
        )}
      </div>
             
<div className="flex flex-cols-2 md:flex-cols-4 gap-10 max-w-4xl mx-auto px-4 m-30">
  {Iteam.map((Iteam) => (
    <motion.div
      key={Iteam.id}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-amber-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center cursor-pointer border-2 border-transparent hover:border-amber-50"
    >
     
      
      
      <div className="relative z-10">
        
        <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center text-4xl shadow-md group-hover:shadow-xl group-hover:rotate-3 transition-all duration-300">
          <span className="text-4xl text-black">{Iteam.Icon}</span>
        </div>
        
      
        <h3 className="mt-4 text-xl font-bold text-amber-600 group-hover:text-amber-500 transition-colors duration-300">
          {Iteam.name}
        </h3>
       
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
}