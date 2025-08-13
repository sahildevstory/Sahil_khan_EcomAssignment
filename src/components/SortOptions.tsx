import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SortOption } from '../types/Product';

interface SortOptionsProps {
  sortBy: SortOption | '';
  onSortChange: (sort: SortOption | '') => void;
}

export const SortOptions: React.FC<SortOptionsProps> = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: '', label: 'Default' },
    { value: 'name-asc' as SortOption, label: 'Name A-Z' },
    { value: 'name-desc' as SortOption, label: 'Name Z-A' },
    { value: 'price-asc' as SortOption, label: 'Price Low to High' },
    { value: 'price-desc' as SortOption, label: 'Price High to Low' },
    { value: 'rating-desc' as SortOption, label: 'Highest Rated' },
    { value: 'rating-asc' as SortOption, label: 'Lowest Rated' },
  ];

  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption | '')}
        className="appearance-none bg-white border-2 border-purple-200 rounded-xl px-4 py-2 pr-10 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl text-gray-800 font-medium"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-purple-600" />
      </div>
    </div>
  );
};