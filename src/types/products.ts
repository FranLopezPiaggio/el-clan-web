export type BeerType = "all" | "Dorada" | "Apa" | "Pampeana" | "Ipa" | "Red";

export type Product = {
    id: number;
    name: string;
    type: BeerType;
    abv?: number;
    ibu?: number;
    image: string;
    price?: number;
    size?: string;
    description?: string;
    inStock?: boolean;
    stock?: number;
    createdAt?: string;
    updatedAt?: string;
};
