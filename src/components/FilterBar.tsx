import React from 'react';
import { Filter, Search as SearchIcon } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { SortOptions } from './SortOptions';
import { SortOption } from '../types/Product';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: SortOption | '';
  onSortChange: (sort: SortOption | '') => void;
  productCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  productCount,
}) => {
  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-xl border border-blue-200">
              <Filter className="w-4 h-4 text-blue-600" />
              <label className="text-sm font-semibold text-blue-800 whitespace-nowrap">
                Category:
              </label>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
              />
            </div>
            
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-xl border border-purple-200">
              <SearchIcon className="w-4 h-4 text-purple-600" />
              <label className="text-sm font-semibold text-purple-800 whitespace-nowrap">
                Sort by:
              </label>
              <SortOptions sortBy={sortBy} onSortChange={onSortChange} />
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
            <span className="font-semibold text-gray-800">{productCount}</span> {productCount === 1 ? 'product' : 'products'} found
            {selectedCategory && (
              <span> in <span className="font-semibold text-blue-600 capitalize">{selectedCategory}</span></span>
            )}
            {searchTerm && (
              <span> matching "<span className="font-semibold text-purple-600">{searchTerm}</span>"</span>
            )}
          </div>
          
          {/* Quick filters */}
          <div className="hidden md:flex gap-2">
            <button className="px-3 py-1 text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full hover:from-green-200 hover:to-emerald-200 transition-all duration-200 border border-green-200">
              ⚡ Fast Shipping
            </button>
            <button className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full hover:from-yellow-200 hover:to-orange-200 transition-all duration-200 border border-orange-200">
              🔥 Hot Deals
            </button>
            <button className="px-3 py-1 text-xs bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full hover:from-pink-200 hover:to-rose-200 transition-all duration-200 border border-pink-200">
              ⭐ Top Rated
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};