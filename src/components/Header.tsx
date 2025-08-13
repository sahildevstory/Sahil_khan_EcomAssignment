import React from 'react';
import { ShoppingBag, Sparkles, TrendingUp } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-ping" />
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-green-300 rounded-full animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <ShoppingBag className="w-12 h-12 text-yellow-300" />
            <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-2 -right-2 animate-spin" />
          </div>
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
              FakeStore
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <span className="text-green-300 text-sm font-semibold">Premium Marketplace</span>
            </div>
          </div>
        </div>
        <p className="text-blue-100 text-xl max-w-3xl leading-relaxed">
          ✨ Discover amazing products at <span className="text-yellow-300 font-bold">unbeatable prices</span>. 
          Browse our curated collection of high-quality items across multiple categories.
        </p>
        
        {/* Stats */}
        <div className="flex gap-8 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">1000+</div>
            <div className="text-blue-200 text-sm">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">50K+</div>
            <div className="text-blue-200 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-300">4.8★</div>
            <div className="text-blue-200 text-sm">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-gray-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </header>
  );
};