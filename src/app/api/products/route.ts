// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { productFiltersSchema, createProductSchema } from '@/lib/validations/product'
import { ApiResponse } from '@/types/products'

// GET /api/products - Obtener productos (público)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Validar filtros con Zod
    const filters = productFiltersSchema.parse({
      category: searchParams.get('category'),
      beerType: searchParams.get('beerType'),
      inStock: searchParams.get('inStock'),
      search: searchParams.get('search'),
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
    })

    console.log('🔍 Buscando productos con filtros:', filters)

    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        // Filtro por categoría
        ...(filters.category && { categoryId: filters.category }),
        // Filtro por tipo de cerveza
        ...(filters.beerType && { beerType: filters.beerType }),
        // Filtro por stock disponible
        ...(filters.inStock === 'true' && { stock: { gt: 0 } }),
        // Búsqueda por nombre o descripción
        ...(filters.search && {
          OR: [
            { name: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } },
            { beerType: { contains: filters.search, mode: 'insensitive' } }
          ]
        })
      },
      include: {
        category: true, // Incluir información de categoría
      },
      orderBy: [
        { stock: 'desc' }, // Productos con stock primero
        { createdAt: 'desc' } // Más nuevos primero
      ],
      skip: filters.page && filters.limit ? (filters.page - 1) * filters.limit : 0,
      take: filters.limit || 12,
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
    
    // Validar datos de entrada
    const validatedData = createProductSchema.parse(body)
    console.log('📦 Creando producto:', validatedData.name)

    // Generar slug automáticamente
    const slug = validatedData.name
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
        name: validatedData.name,
        slug,
        description: validatedData.description,
        price: validatedData.price,
        beerType: validatedData.beerType,
        ibu: validatedData.ibu || null,
        abv: validatedData.abv,
        measure: validatedData.measure,
        stock: validatedData.stock,
        pairing: validatedData.pairing || null,
        imageUrl: validatedData.imageUrl || null,
        categoryId: validatedData.categoryId,
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