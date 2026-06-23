"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function PayShop() {
  const [cart, setCart] = useState<CartItem[]>([]);

 
  const addTestProduct = () => {
    setCart([
      {
        id: 1,
        name: "Cappuccino",
        price: 120000,
        qty: 1,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-cyan-900 py-10">
      <div className="max-w-3xl mx-auto px-4">

       
        {cart.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-2xl shadow">
            <h2 className="text-2xl font-bold text-gray-700">
              شما هنوز محصولی به سبد خرید اضافه نکردید 
            </h2>

           
            <button
              onClick={addTestProduct}
              className="mt-6 bg-amber-600 text-white px-6 py-3 rounded-xl"
            >
             افزودن محصول
            </button>
          </div>
        ) : (
          <>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500">
                      {item.price.toLocaleString()} تومان
                    </p>
                    <p className="text-sm text-gray-400">
                      تعداد: {item.qty}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

           
            <div className="mt-6 bg-white p-5 rounded-xl shadow flex justify-between">
              <span className="font-bold">جمع کل:</span>
              <span className="text-amber-600 font-bold">
                {total.toLocaleString()} تومان
              </span>
            </div>

            <button className="w-full mt-6 bg-amber-600 text-white py-3 rounded-xl font-bold">
              پرداخت
            </button>
          </>
        )}
      </div>
    </div>
  );
}