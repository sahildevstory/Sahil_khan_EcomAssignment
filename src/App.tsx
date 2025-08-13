import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ProductGrid } from './components/ProductGrid';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { ErrorState } from './components/ErrorState';
import { useProducts } from './hooks/useProducts';
import { filterProducts, sortProducts, getUniqueCategories } from './utils/productUtils';
import { SortOption } from './types/Product';

function App() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState<SortOption | ''>('');

  const categories = useMemo(() => getUniqueCategories(products), [products]);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = filterProducts(products, searchTerm, selectedCategory);
    return sortProducts(filtered, sortBy);
  }, [products, searchTerm, selectedCategory, sortBy]);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {!loading && !error && (
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          productCount={filteredAndSortedProducts.length}
        />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && <LoadingSkeleton />}
        
        {error && <ErrorState message={error} onRetry={handleRetry} />}
        
        {!loading && !error && (
          <ProductGrid products={filteredAndSortedProducts} />
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              FakeStore Premium
            </h3>
            <p className="text-gray-300 mb-6">Your trusted marketplace for quality products</p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <span>© 2024 FakeStore</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;