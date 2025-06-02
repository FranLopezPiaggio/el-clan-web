import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🚫 Acceso Denegado</h1>
        <p className="text-gray-600 mb-8">No tienes permisos para acceder.</p>
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}