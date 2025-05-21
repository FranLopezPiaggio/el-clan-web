import Product from '@/types/products'

// Datos de prueba para desarrollo
const mockProducts: Product[] = [
  {
    id: 1,
    name: "IPA El Clan",
    size: "500ml",
    price: 350,
    image: "/img/heroBG.jpg",
    description: "Cerveza IPA con notas cítricas y amargor equilibrado",
    IBU: 45,
    ABV: 6.2,
    inStock: true
  },
  {
    id: 2,
    name: "Stout El Clan",
    size: "500ml",
    price: 380,
    image: "/img/heroBG.jpg",
    description: "Cerveza negra con sabores a café y chocolate",
    IBU: 30,
    ABV: 5.8,
    inStock: true
  },
  {
    id: 3,
    name: "Golden Ale El Clan",
    size: "500ml",
    price: 320,
    image: "/img/heroBG.jpg",
    description: "Cerveza rubia suave y refrescante",
    IBU: 20,
    ABV: 4.5,
    inStock: true
  },
  {
    id: 4,
    name: "Red Ale El Clan",
    size: "500ml",
    price: 350,
    image: "/img/heroBG.jpg",
    description: "Cerveza roja con notas a caramelo y malta",
    IBU: 25,
    ABV: 5.2,
    inStock: false
  },
  {
    id: 5,
    name: "Red Ale El Clan",
    size: "500ml",
    price: 350,
    image: "/img/heroBG.jpg",
    description: "Cerveza roja con notas a caramelo y malta",
    IBU: 25,
    ABV: 5.2,
    inStock: false
  },
  {
    id: 6,
    name: "Red Ale El Clan",
    size: "500ml",
    price: 350,
    image: "/img/heroBG.jpg",
    description: "Cerveza roja con notas a caramelo y malta",
    IBU: 25,
    ABV: 5.2,
    inStock: false
  }
];

export async function fetchProducts(): Promise<Product[]> {
  // Simula una llamada a API con un pequeño retraso
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Productos cargados:', mockProducts);
      resolve(mockProducts);
    }, 1000);
  });
  
  // Cuando tengas tu API real, descomenta este código y comenta el anterior
  // const res = await fetch('https://tu-api.com/productos') 
  // if (!res.ok) throw new Error('No se pudo cargar el catálogo')
  // return res.json()
}