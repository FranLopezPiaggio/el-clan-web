import { useState, useEffect } from 'react'
import { Product, ApiResponse } from '@/types/products'
import { ProductFilters } from '@/lib/validations/product'

interface UseCatalogReturn {
  products: Product[]
  loading: boolean
  error: string | null
  filters: ProductFilters
  setFilters: (filters: ProductFilters) => void
  refetch: () => void
  hasMore: boolean
  loadMore: () => void
}

export function useCatalog(): UseCatalogReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<ProductFilters>({})
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchProducts = async (currentFilters: ProductFilters, currentPage: number = 1) => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams()
      
      // Agregar filtros
      Object.entries(currentFilters).forEach(([key, value]) => {
        if (value) params.append(key, value.toString())
      })
      
      // Agregar paginación
      params.append('page', currentPage.toString())
      params.append('limit', '12')

      const response = await fetch(`/api/products?${params}`)
      const data: ApiResponse<Product[]> = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Error al cargar productos')
      }

      if (currentPage === 1) {
        setProducts(data.data || [])
      } else {
        setProducts(prev => [...prev, ...(data.data || [])])
      }

      setHasMore((data.data?.length || 0) === 12) // Si recibimos menos de 12, no hay más
      setPage(currentPage)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(filters, 1)
  }, [filters])

  const refetch = () => {
    fetchProducts(filters, 1)
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchProducts(filters, page + 1)
    }
  }

  return {
    products,
    loading,
    error,
    filters,
    setFilters,
    refetch,
    hasMore,
    loadMore
  }
}