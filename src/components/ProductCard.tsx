import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border border-gray-100 hover:border-blue-200 relative">
      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:scale-110">
        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        -{Math.floor(Math.random() * 30 + 10)}%
      </div>
      
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>
      
      <div className="p-6 relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating.rate) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'fill-gray-200 text-gray-200'
                }`} 
              />
            ))}
            <span className="text-sm font-semibold text-gray-800 ml-1">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            ({product.rating.count} reviews)
          </span>
        </div>
        
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3rem] leading-6 text-lg group-hover:text-blue-600 transition-colors duration-300">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">
              ${(product.price * 1.3).toFixed(2)}
            </span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold rounded-full capitalize border border-blue-200">
            {product.category}
          </span>
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
          <ShoppingCart className="w-5 h-5 group-hover/btn:animate-bounce" />
          Add to Cart
        </button>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};