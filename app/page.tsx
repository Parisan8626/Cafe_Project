"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Popular from "@/app/Components/HomePage/Popular";
import SearchBar from "@/app/Components/HomePage/SearchBar";
import Header from "@/app/Components/Header"
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function HomePage() {
  
     return(
      <div className="bg-cyan-900">
         <Header/>
      <Popular />
      <SearchBar />
      </div>
     )
}