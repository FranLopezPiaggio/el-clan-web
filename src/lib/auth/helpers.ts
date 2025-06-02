// src/lib/auth/helpers.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const supabase = createServerComponentClient({ cookies })
  
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