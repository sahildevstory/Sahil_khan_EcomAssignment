import { Product, SortOption } from '../types/Product';

export const filterProducts = (
  products: Product[],
  searchTerm: string,
  selectedCategory: string
): Product[] => {
  return products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
};

export const sortProducts = (products: Product[], sortBy: SortOption | ''): Product[] => {
  if (!sortBy) return products;

  const sorted = [...products];

  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating-asc':
      return sorted.sort((a, b) => a.rating.rate - b.rating.rate);
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    default:
      return sorted;
  }
};

export const getUniqueCategories = (products: Product[]): string[] => {
  const categories = products.map(product => product.category);
  return Array.from(new Set(categories)).sort();
};