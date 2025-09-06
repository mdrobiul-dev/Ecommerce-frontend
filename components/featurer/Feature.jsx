"use client";
import React from "react";
import ProductCard from "@/components/featurer/ProductCard";

const Feature = () => {
  return (
    <div className="mt-4">
      <div className="mx-40 flex justify-between">
        <h3 className="font-medium text-[40px] text-[#000000]">Featured</h3>
        <ul className="flex self-center gap-1">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div>
        <ProductCard
          className="w-40"
          title="Shark - Men's cabretta white golf glove"
          price="$19.00"
          image="/Card.png"
          rating={4}
          badge="HOT"
          onAddToCart={() => alert("Added to cart!")}
        />
        <ProductCard
          title="Nike Running Shoes"
          price="$99.00"
          image="/Card.png"
          rating={5}
          badge="NEW"
        />
      </div>
    </div>
  );
};

export default Feature;
