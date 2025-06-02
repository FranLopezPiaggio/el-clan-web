// app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// GET /api/products/[id] - Obtener un producto específico
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { 
        id: params.id,
        isActive: true 
      },
      include: {
        category: true,
      },
    })

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Producto no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: product 
    })

  } catch (error) {
    console.error('❌ Error fetching product:', error)
    return NextResponse.json(
      { success: false, error: 'Error al obtener producto' },
      { status: 500 }
    )
  }
}

// PUT /api/products/[id] - Actualizar producto (solo admin)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createServerSupabaseClient()
    
    // Verificar autenticación y admin
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'No autorizado' },
        { status: 401 }
      )
    }

    const adminUser = await prisma.adminUser.findUnique({
      where: { userId: user.id }
    })

    if (!adminUser || !adminUser.isActive) {
      return NextResponse.json(
        { success: false, error: 'Acceso denegado' },
        { status: 403 }
      )
    }

    const body = await request.json()
    console.log('📝 Actualizando producto:', params.id)

    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        ...(body.name && { name: body.name }),
        ...(body.description && { description: body.description }),
        ...(body.price && { price: parseFloat(body.price) }),
        ...(body.beerType && { beerType: body.beerType }),
        ...(body.ibu !== undefined && { ibu: body.ibu ? parseInt(body.ibu) : null }),
        ...(body.abv && { abv: parseFloat(body.abv) }),
        ...(body.measure && { measure: body.measure }),
        ...(body.stock !== undefined && { stock: parseInt(body.stock) }),
        ...(body.pairing !== undefined && { pairing: body.pairing }),
        ...(body.imageUrl !== undefined && { imageUrl: body.imageUrl }),
        ...(body.categoryId && { categoryId: body.categoryId }),
        updatedAt: new Date(),
      },
      include: {
        category: true,
      },
    })

    return NextResponse.json({ 
      success: true, 
      data: product,
      message: 'Producto actualizado exitosamente'
    })

  } catch (error) {
    console.error('❌ Error updating product:', error)
    return NextResponse.json(
      { success: false, error: 'Error al actualizar producto' },
      { status: 500 }
    )
  }
}

// DELETE /api/products/[id] - Eliminar producto (soft delete)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createServerSupabaseClient()
    
    // Verificar autenticación y admin
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'No autorizado' },
        { status: 401 }
      )
    }

    const adminUser = await prisma.adminUser.findUnique({
      where: { userId: user.id }
    })

    if (!adminUser || !adminUser.isActive) {
      return NextResponse.json(
        { success: false, error: 'Acceso denegado' },
        { status: 403 }
      )
    }

    console.log('🗑️ Eliminando producto:', params.id)

    // Soft delete - marcar como inactivo en lugar de eliminar
    await prisma.product.update({
      where: { id: params.id },
      data: { 
        isActive: false,
        updatedAt: new Date()
      },
    })

    return NextResponse.json({ 
      success: true,
      message: 'Producto eliminado exitosamente'
    })

  } catch (error) {
    console.error('❌ Error deleting product:', error)
    return NextResponse.json(
      { success: false, error: 'Error al eliminar producto' },
      { status: 500 }
    )
  }
}