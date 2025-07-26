import { z } from 'zod'

export const createProductSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  price: z.number().positive('El precio debe ser positivo'),
  beerType: z.string().min(1, 'El tipo de cerveza es requerido'),
  ibu: z.number().optional(),
  abv: z.number().positive('El ABV debe ser positivo').max(100, 'ABV inválido'),
  measure: z.string().min(1, 'La medida es requerida'),
  stock: z.number().int().min(0, 'El stock no puede ser negativo'),
  pairing: z.string().optional(),
  imageUrl: z.string().url('URL de imagen inválida').optional(),
  categoryId: z.string().min(1, 'La categoría es requerida'),
})

export const updateProductSchema = createProductSchema.partial()

export const productFiltersSchema = z.object({
  category: z.string().optional(),
  beerType: z.string().optional(),
  inStock: z.string().optional(),
  search: z.string().optional(),
  page: z.string().transform(Number).optional(),
  limit: z.string().transform(Number).optional(),
})

export type CreateProductInput = z.infer<typeof createProductSchema>
export type UpdateProductInput = z.infer<typeof updateProductSchema>
export type ProductFilters = z.infer<typeof productFiltersSchema> 