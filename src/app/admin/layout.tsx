import { requireAdmin } from '@/lib/auth/helpers'
import AdminSidebar from '@/components/admin/AdminSideBar'
import AdminHeader from '@/components/admin/AdminHeader'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, adminUser } = await requireAdmin()

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={user} adminUser={adminUser} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}