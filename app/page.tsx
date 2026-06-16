"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Popluar from "@/app/Components/HomePage/Popular";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-cyan-950">
      <header 
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('pic/Screenshot_20260611_153344_Chrome.jpg')" }}
      >
        <div className="flex z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white text-2xl font-bold"
              >
                Cafe San
              </motion.div>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              <div className="hidden md:flex space-x-8 space-x-reverse">
                {["Home", "Manu", "Events ", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-amber-500 transition-colors duration-300 p-3"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            
           
            <motion.div 
              initial={false}
              animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="flex flex-col space-y-3 bg-black/50 rounded-lg p-4 backdrop-blur-sm">
                {["Home", "Manu", "Events ", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-amber-500 transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-6xl md:text-6xl font-bold p-6 md:p-20"
          >
           طعم واقعی قهوه و<br/> دسر های جادویی را <br/>در کافه ما تجربه کنید
          </motion.h1>
        </div>
      </header>
       <Popluar/>
    </div>
    
  );
}