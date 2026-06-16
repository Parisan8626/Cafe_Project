"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function ItemPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  
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
    </div>
  );
}