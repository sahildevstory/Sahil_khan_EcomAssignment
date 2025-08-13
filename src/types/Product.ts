export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'rating-asc' | 'rating-desc';