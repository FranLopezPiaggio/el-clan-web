// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🍺 Inicializando base de datos de El Clan...')

  // Crear categorías
  const aleCategory = await prisma.category.upsert({
    where: { slug: 'ale' },
    update: {},
    create: {
      name: 'Ale',
      slug: 'ale',
      description: 'Cervezas de fermentación alta, más complejas y aromáticas'
    }
  })

  const lagerCategory = await prisma.category.upsert({
    where: { slug: 'lager' },
    update: {},
    create: {
      name: 'Lager',
      slug: 'lager',
      description: 'Cervezas de fermentación baja, suaves y refrescantes'
    }
  })

  // Crear productos de El Clan
  const products = [
    {
      name: 'El Clan IPA',
      slug: 'el-clan-ipa',
      description: 'Cerveza Ale de intenso aroma y sabor a lúpulo, con notas cítricas y frutales.',
      price: 850,
      beerType: 'IPA',
      ibu: 45,
      abv: 6.2,
      measure: '500ml',
      stock: 50,
      categoryId: aleCategory.id,
      imageUrl: '/assets/img/el-clan-ipa.webp'
    },
    {
      name: 'El Clan APA',
      slug: 'el-clan-apa',
      description: 'American Pale Ale, refrescante y balanceada, con presencia de lúpulos americanos.',
      price: 800,
      beerType: 'APA',
      ibu: 35,
      abv: 5.5,
      measure: '500ml',
      stock: 40,
      categoryId: aleCategory.id,
      imageUrl: '/assets/img/el-clan-apa.webp'
    },
    {
      name: 'El Clan Pampeana',
      slug: 'el-clan-pampeana',
      description: 'Ale rubia, suave y fácil de tomar, con notas maltosas y final seco.',
      price: 750,
      beerType: 'Pampeana',
      ibu: 25,
      abv: 4.8,
      measure: '500ml',
      stock: 60,
      categoryId: aleCategory.id,
      imageUrl: '/assets/img/el-clan-pampeana.webp'
    },
    {
      name: 'El Clan Red',
      slug: 'el-clan-red',
      description: 'Cerveza Ale roja, con cuerpo medio y notas a caramelo y leve tostado.',
      price: 820,
      beerType: 'Red Ale',
      ibu: 30,
      abv: 5.8,
      measure: '500ml',
      stock: 35,
      categoryId: aleCategory.id,
      imageUrl: '/assets/img/el-clan-red.webp'
    },
    {
      name: 'El Clan Dorada',
      slug: 'el-clan-dorada',
      description: 'Lager dorada, ligera y refrescante, ideal para cualquier ocasión.',
      price: 700,
      beerType: 'Lager',
      ibu: 20,
      abv: 4.5,
      measure: '500ml',
      stock: 80,
      categoryId: lagerCategory.id,
      imageUrl: '/assets/img/el-clan-dorada.webp'
    }
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product
    })
  }

  console.log('✅ Base de datos inicializada con productos de El Clan')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })