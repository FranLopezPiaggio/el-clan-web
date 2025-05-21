interface Product {
    id: number;
    name: string;
    size: string;
    price: number;
    image: string;
    description: string;
    maridaje?: string;
    IBU: number;
    ABV: number;
    inStock: boolean;
}

export default Product;