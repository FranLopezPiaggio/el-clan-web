// src/lib/auth/helpers.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const cookieStore = cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
  
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect('/auth/login')
  }
  
  return user
}

export async function requireAdmin() {
  const user = await requireAuth()
  
  const adminUser = await prisma.adminUser.findUnique({
    where: { userId: user.id }
  })
  
  if (!adminUser || !adminUser.isActive) {
    redirect('/auth/unauthorized')
  }
  
  return { user, adminUser }
}