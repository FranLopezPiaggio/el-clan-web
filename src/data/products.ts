// Define la estructura estricta de un producto
export interface Product {
    id: number;
    name: string;
    style: string;
    price: number;
    description: string;
    ibu: number;
    alcoholPercentage: number;
    imagePath: string;
    inStock: boolean;
}

// Los datos de la cervecería
export const varieties: Product[] = [
    {
        id: 1,
        name: "Red",
        style: "El Clan Red",
        price: 1800, // Precio de ejemplo en tu moneda
        description: "Cerveza roja. Perfecta para acompañar tus comidas.",
        ibu: 60,
        alcoholPercentage: 6,
        imagePath: "/images/ipa.webp",
        inStock: true
    },
    {
        id: 2,
        name: "Golden",
        style: "El Clan Golden",
        price: 1950,
        description: "Cerveza liviana, fresca y refrescante. Perfecta para acompañar tus comidas.",
        ibu: 20,
        alcoholPercentage: 5,
        imagePath: "/images/porter.webp",
        inStock: true
    },
];

// Datos de contacto que usará la lógica de WhatsApp
export const CONTACT_INFO = {
    whatsappNumber: "54911XXXXXX",
    companyName: "Cervecería El Clan"
}