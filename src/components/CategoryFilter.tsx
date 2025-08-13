import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="relative">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="appearance-none bg-white border-2 border-blue-200 rounded-xl px-4 py-2 pr-10 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg capitalize cursor-pointer hover:shadow-xl text-gray-800 font-medium"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category} className="capitalize">
            {category}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-blue-600" />
      </div>
    </div>
  );
};