// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// GET /api/products - Obtener productos (público)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Filtros opcionales
    const category = searchParams.get('category')
    const beerType = searchParams.get('beerType') 
    const inStock = searchParams.get('inStock')
    const search = searchParams.get('search')

    console.log('🔍 Buscando productos con filtros:', { category, beerType, inStock, search })

    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        // Filtro por categoría
        ...(category && { categoryId: category }),
        // Filtro por tipo de cerveza
        ...(beerType && { beerType }),
        // Filtro por stock disponible
        ...(inStock === 'true' && { stock: { gt: 0 } }),
        // Búsqueda por nombre o descripción
        ...(search && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
            { beerType: { contains: search, mode: 'insensitive' } }
          ]
        })
      },
      include: {
        category: true, // Incluir información de categoría
      },
      orderBy: [
        { stock: 'desc' }, // Productos con stock primero
        { createdAt: 'desc' } // Más nuevos primero
      ]
    })

    console.log(`✅ Encontrados ${products.length} productos`)

    return NextResponse.json({ 
      success: true, 
      data: products,
      count: products.length 
    })

  } catch (error) {
    console.error('❌ Error fetching products:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al obtener productos',
        message: 'Hubo un problema al cargar el catálogo'
      },
      { status: 500 }
    )
  }
}

// POST /api/products - Crear producto (solo admin)
export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    
    // Verificar que el usuario esté autenticado
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'No autorizado' },
        { status: 401 }
      )
    }

    // Verificar que sea admin
    const adminUser = await prisma.adminUser.findUnique({
      where: { userId: user.id }
    })

    if (!adminUser || !adminUser.isActive) {
      return NextResponse.json(
        { success: false, error: 'Acceso denegado - Solo administradores' },
        { status: 403 }
      )
    }

    const body = await request.json()
    console.log('📦 Creando producto:', body.name)

    // Generar slug automáticamente
    const slug = body.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Verificar que el slug sea único
    const existingProduct = await prisma.product.findUnique({
      where: { slug }
    })

    if (existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Ya existe un producto con ese nombre' },
        { status: 400 }
      )
    }

    const product = await prisma.product.create({
      data: {
        name: body.name,
        slug,
        description: body.description,
        price: parseFloat(body.price),
        beerType: body.beerType,
        ibu: body.ibu ? parseInt(body.ibu) : null,
        abv: parseFloat(body.abv),
        measure: body.measure,
        stock: parseInt(body.stock) || 0,
        pairing: body.pairing || null,
        imageUrl: body.imageUrl || null,
        categoryId: body.categoryId,
      },
      include: {
        category: true,
      },
    })

    console.log('✅ Producto creado:', product.id)

    return NextResponse.json({ 
      success: true, 
      data: product,
      message: 'Producto creado exitosamente'
    })

  } catch (error) {
    console.error('❌ Error creating product:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al crear producto',
        message: 'Hubo un problema al guardar el producto'
      },
      { status: 500 }
    )
  }
}