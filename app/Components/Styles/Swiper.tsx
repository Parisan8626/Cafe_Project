"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySwiper() {
  const popularproducts = [
    {
      id: 1,
      name: "Cappuccino",
      price: "125,000 تومان",
      img: "/pic/Screenshot_20260611_153659_Chrome.jpg",
      description: "اسپرسو + شیر بخار داده شده + کف شیر"
    },
    {
      id: 2,
      name: "Ice Cream Mix",
      price: "95,000 تومان",
      img: "/pic/Screenshot_20260611_161331_Chrome.jpg",
      description: "بستنی + کاکائو + شیر"
    },
    {
      id: 3,
      name: "Sandwich",
      price: "150,000 تومان",
      img: "/pic/Screenshot_20260611_155401_Chrome.jpg",
      description: "ساندویچ مخصوص کافه سن"
    },
    {
      id: 4,
      name: "Neskafe Cake",
      price: "100,000 تومان",
      img: "/pic/Screenshot_20260611_154517_Chrome.jpg",
      description: "کیک نسکافه ای خوشمزه"
    },
  ];

  return (
    <section className="py-16 text-white font-bold p-10 text-4xl">
      <div className="container mx-auto px-4">
        
       
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            محصولات محبوب 
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-white mt-4 text-lg">
            پرطرفدارترین محصولات کافه سان
          </p>
        </div>

        {/* اسلایدر */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },   
            640: { slidesPerView: 2 },   
            1024: { slidesPerView: 3 }, 
          }}
          className="pb-12 "
        >
          {popularproducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-amber-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                
                
                <div className="flex h-64 overflow-hidden bg-amber-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover  transition-transform duration-500"
                  />
                  
                 
                  <div className="absolute top-4 right-4 bg-amber-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🔥 پرفروش
                  </div>
                </div>
                
                
                <div className="p-5 text-right">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  
                  <p className=" text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold text-lg">
                      {product.price}
                    </span>
                    
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-semibold">
                      سفارش دهید
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}