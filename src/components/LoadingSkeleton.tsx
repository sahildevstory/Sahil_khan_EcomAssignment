import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse border border-gray-100">
          <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative">
            <div className="absolute top-4 right-4 w-10 h-10 bg-gray-300 rounded-full" />
            <div className="absolute top-4 left-4 w-16 h-6 bg-gray-300 rounded-full" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
                ))}
              </div>
              <div className="w-16 h-4 bg-gray-200 rounded-full" />
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-5 bg-gray-200 rounded-lg w-full" />
              <div className="h-5 bg-gray-200 rounded-lg w-3/4" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="w-12 h-3 bg-gray-200 rounded" />
                <div className="w-20 h-7 bg-gray-200 rounded-lg" />
              </div>
              <div className="w-24 h-6 bg-gray-200 rounded-full" />
            </div>
            <div className="w-full h-12 bg-gray-200 rounded-xl mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
};