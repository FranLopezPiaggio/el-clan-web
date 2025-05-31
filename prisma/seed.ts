// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🍺 Creando datos de prueba para Cervecería El Clan...')

  // 🗑️ Limpiar datos existentes (opcional)
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.customer.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.adminUser.deleteMany()
  
  console.log('🧹 Datos anteriores limpiados')

  // 📂 Crear categorías de cerveza
  console.log('📂 Creando categorías...')
  
  const ipaCategory = await prisma.category.create({
    data: {
      name: 'IPA',
      slug: 'ipa',
      description: 'India Pale Ale - Cervezas con carácter hoppy y amargor pronunciado, perfectas para los amantes del lúpulo.'
    }
  })

  const lagerCategory = await prisma.category.create({
    data: {
      name: 'Lager',
      slug: 'lager', 
      description: 'Cervezas de fermentación baja, suaves y refrescantes, ideales para cualquier momento.'
    }
  })

  const stoutCategory = await prisma.category.create({
    data: {
      name: 'Stout',
      slug: 'stout',
      description: 'Cervezas oscuras con sabores tostados y cuerpo robusto, tradición irlandesa.'
    }
  })

  const wheatCategory = await prisma.category.create({
    data: {
      name: 'Wheat Beer',
      slug: 'wheat-beer',
      description: 'Cervezas de trigo, suaves y cremosas con notas cítricas naturales.'
    }
  })

  console.log('✅ Categorías creadas')

  // 🍺 Crear productos (cervezas de El Clan)
  console.log('🍺 Creando productos...')

  const products = await Promise.all([
    // IPAs
    prisma.product.create({
      data: {
        name: 'El Clan IPA Clásica',
        slug: 'el-clan-ipa-clasica',
        description: 'Nuestra IPA insignia. Elaborada con lúpulos Cascade y Centennial, ofrece un equilibrio perfecto entre amargor y aroma. Notas cítricas y florales que conquistan desde el primer sorbo.',
        price: 850,
        beerType: 'IPA',
        ibu: 45,
        abv: 6.2,
        measure: '500ml',
        stock: 50,
        pairing: 'Carnes asadas, quesos duros, curry, comida mexicana picante',
        categoryId: ipaCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400'
      }
    }),

    prisma.product.create({
      data: {
        name: 'El Clan IPA Doble',
        slug: 'el-clan-ipa-doble',
        description: 'Para los más aventureros. Doble malta, doble lúpulo, doble carácter. Una explosión de sabor que desafía los sentidos con 70 IBUs de puro placer amargo.',
        price: 950,
        beerType: 'Double IPA',
        ibu: 70,
        abv: 8.5,
        measure: '500ml',
        stock: 30,
        pairing: 'Quesos azules, chocolate amargo, carnes ahumadas',
        categoryId: ipaCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400'
      }
    }),

    // Lagers
    prisma.product.create({
      data: {
        name: 'El Clan Lager Dorada',
        slug: 'el-clan-lager-dorada',
        description: 'La cerveza perfecta para cualquier momento. Suave, refrescante y con el carácter distintivo de El Clan. Elaborada siguiendo tradiciones alemanas con maltas argentinas.',
        price: 750,
        beerType: 'Lager',
        ibu: 20,
        abv: 4.8,
        measure: '500ml',
        stock: 100,
        pairing: 'Pescados, ensaladas, comida asiática, quesos suaves',
        categoryId: lagerCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1558642891-54be180ea339?w=400'
      }
    }),

    prisma.product.create({
      data: {
        name: 'El Clan Pilsner',
        slug: 'el-clan-pilsner',
        description: 'Inspirada en las mejores pilsners checas. Cristalina, con un amargor noble y aroma floral distintivo. La elegancia en cada trago.',
        price: 780,
        beerType: 'Pilsner',
        ibu: 35,
        abv: 5.2,
        measure: '500ml',
        stock: 75,
        pairing: 'Mariscos, pollo grillado, quesos frescos, aperitivos',
        categoryId: lagerCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400'
      }
    }),

    // Stouts
    prisma.product.create({
      data: {
        name: 'El Clan Stout Imperial',
        slug: 'el-clan-stout-imperial',
        description: 'Oscura como la noche, rica como la historia. Notas de café tostado, chocolate amargo y vainilla. Una cerveza para saborear lentamente y con respeto.',
        price: 920,
        beerType: 'Imperial Stout',
        ibu: 50,
        abv: 9.2,
        measure: '500ml',
        stock: 25,
        pairing: 'Postres de chocolate, helado de vainilla, quesos añejos, cigars',
        categoryId: stoutCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1569276809442-de0b82080b5e?w=400'
      }
    }),

    // Wheat Beer
    prisma.product.create({
      data: {
        name: 'El Clan Weizen',
        slug: 'el-clan-weizen',
        description: 'Cerveza de trigo tradicional alemana con el toque argentino de El Clan. Suave, cremosa, con notas de banana y clavo de olor natural de la fermentación.',
        price: 820,
        beerType: 'Weizen',
        ibu: 15,
        abv: 5.4,
        measure: '500ml',
        stock: 60,
        pairing: 'Pescados blancos, ensaladas de frutas, quesos cremosos, brunch',
        categoryId: wheatCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1623511993406-57778c71e19b?w=400'
      }
    }),

    // Edición especial
    prisma.product.create({
      data: {
        name: 'El Clan Peaky Blinders Edition',
        slug: 'el-clan-peaky-blinders-edition',
        description: 'Edición limitada inspirada en la elegancia y el carácter de los Peaky Blinders. Porter robusta con whisky barrel aging. Only for the finest taste.',
        price: 1200,
        beerType: 'Barrel Aged Porter',
        ibu: 40,
        abv: 7.8,
        measure: '750ml',
        stock: 12,
        pairing: 'Carnes rojas, quesos curados, chocolate negro, whisky',
        categoryId: stoutCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400'
      }
    })
  ])

  console.log('✅ Productos creados:', products.length)

  // 👤 Crear clientes de ejemplo
  console.log('👤 Creando clientes de ejemplo...')

  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'Juan Pérez',
        email: 'juan.perez@email.com',
        phone: '+541123456789',
        address: 'Av. Corrientes 1234, CABA'
      }
    }),

    prisma.customer.create({
      data: {
        name: 'María González',
        email: 'maria.gonzalez@email.com', 
        phone: '+541187654321',
        address: 'San Martín 456, Palermo'
      }
    }),

    prisma.customer.create({
      data: {
        name: 'Carlos Rodriguez',
        phone: '+541156789012',
        address: 'Belgrano 789, Villa Crespo'
      }
    })
  ])

  console.log('✅ Clientes creados:', customers.length)

  // 📦 Crear algunos pedidos de ejemplo
  console.log('📦 Creando pedidos de ejemplo...')

  const order1 = await prisma.order.create({
    data: {
      customerId: customers[0].id,
      total: 1600,
      status: 'CONFIRMED',
      notes: 'Entrega entre 18-20hs por favor',
      items: {
        create: [
          {
            productId: products[0].id, // IPA Clásica
            quantity: 2,
            price: 850
          }
        ]
      }
    }
  })

  const order2 = await prisma.order.create({
    data: {
      customerId: customers[1].id,
      total: 2650,
      status: 'PREPARING',
      items: {
        create: [
          {
            productId: products[1].id, // IPA Doble
            quantity: 1,
            price: 950
          },
          {
            productId: products[2].id, // Lager Dorada
            quantity: 2,
            price: 750
          },
          {
            productId: products[6].id, // Peaky Blinders Edition
            quantity: 1,
            price: 1200
          }
        ]
      }
    }
  })

  console.log('✅ Pedidos creados: 2')

  console.log('\n🎉 ¡Base de datos poblada exitosamente!')
  console.log('📊 Resumen:')
  console.log(`   • ${await prisma.category.count()} categorías`)
  console.log(`   • ${await prisma.product.count()} productos`)
  console.log(`   • ${await prisma.customer.count()} clientes`)
  console.log(`   • ${await prisma.order.count()} pedidos`)
  console.log('\n✨ Ya puedes empezar a desarrollar tu aplicación')
}

main()
  .catch((e) => {
    console.error('❌ Error creando datos de prueba:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })