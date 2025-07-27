// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🍺 Inicializando base de datos...')

  // Crear categoría básica
  const category = await prisma.category.upsert({
    where: { slug: 'cervezas' },
    update: {},
    create: {
      name: 'Cervezas',
      slug: 'cervezas',
      description: 'Nuestras cervezas artesanales'
    }
  })

  // Crear producto de ejemplo
  await prisma.product.upsert({
    where: { slug: 'el-clan-ipa' },
    update: {},
    create: {
      name: 'El Clan IPA',
      slug: 'el-clan-ipa',
      description: 'Nuestra IPA insignia con notas cítricas',
      price: 850,
      beerType: 'IPA',
      ibu: 45,
      abv: 6.2,
      measure: '500ml',
      stock: 50,
      categoryId: category.id,
      imageUrl: '/api/placeholder/400/400'
    }
  })

  console.log('✅ Base de datos inicializada')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })