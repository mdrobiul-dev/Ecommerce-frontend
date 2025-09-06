import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react"; // for stars

const ProductCard = ({
  title = "Sample Product",
  price = "$19.00",
  image = "/default-product.png",
  rating = 4,
  badge = "HOT",
  onAddToCart,
  className = "",
}) => {
  return (
    <div
      className={`relative group rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 bg-white text-black font-bold text-xs px-2 py-1 rounded-md shadow">
          {badge}
        </span>
      )}

      {/* Product Image */}
      <div className="relative w-full h-64 flex items-center justify-center bg-gray-50">
        <Image src={image} alt={title} fill className="object-contain p-4" />

        {/* Add to Cart (shows on hover) */}
        <button
          onClick={onAddToCart}
          className="absolute bottom-3 w-[90%] bg-black text-white py-2 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Add to cart
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-1">
        {/* Rating */}
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="font-medium text-gray-800">{title}</h3>

        {/* Price */}
        <p className="text-gray-600 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;      
