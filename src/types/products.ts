export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  beerType: string;
  ibu?: number;
  abv: number;
  measure: string;
  stock: number;
  isActive: boolean;
  imageUrl?: string;
  pairing?: string;
  categoryId: string;
  category?: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem extends Product {
  qty: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
}