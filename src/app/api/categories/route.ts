// app/api/categories/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// GET /api/categories - Obtener todas las categorías
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { 
            products: {
              where: { isActive: true } // Solo contar productos activos
            }
          }
        }
      },
      orderBy: { name: 'asc' }
    })

    console.log(`✅ Encontradas ${categories.length} categorías`)

    return NextResponse.json({
      success: true,
      data: categories
    })

  } catch (error) {
    console.error('❌ Error fetching categories:', error)
    return NextResponse.json(
      { success: false, error: 'Error al obtener categorías' },
      { status: 500 }
    )
  }
}

// POST /api/categories - Crear nueva categoría (solo admin)
export async function POST(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    
    // Verificar autenticación
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
    console.log('📂 Creando categoría:', body.name)

    // Generar slug automáticamente
    const slug = body.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Verificar que el slug sea único
    const existingCategory = await prisma.category.findUnique({
      where: { slug }
    })

    if (existingCategory) {
      return NextResponse.json(
        { success: false, error: 'Ya existe una categoría con ese nombre' },
        { status: 400 }
      )
    }

    const category = await prisma.category.create({
      data: {
        name: body.name,
        slug,
        description: body.description || null,
      },
      include: {
        _count: {
          select: { products: true }
        }
      }
    })

    console.log('✅ Categoría creada:', category.id)

    return NextResponse.json({
      success: true,
      data: category,
      message: 'Categoría creada exitosamente'
    })

  } catch (error) {
    console.error('❌ Error creating category:', error)
    return NextResponse.json(
      { success: false, error: 'Error al crear categoría' },
      { status: 500 }
    )
  }
}