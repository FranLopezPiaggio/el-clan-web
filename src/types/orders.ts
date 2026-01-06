import type { Product } from "./products";

export type OrderItem = {
    product: Product;
    quantity: number;
};

export type CustomerInfo = {
    name: string;
    email: string;
    phone: string;
    address?: string;
    isClient?: boolean;
}