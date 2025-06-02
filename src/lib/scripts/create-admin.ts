import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from '@prisma/client'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const prisma = new PrismaClient()

async function createAdmin() {
  console.log('👨‍💼 Creando usuario administrador...')

  try {
    // 1. Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'admin@cerveceria-el-clan.com',
      password: 'admin123456', 
      email_confirm: true
    })

    if (authError) {
      console.error('❌ Error creando usuario en Auth:', authError.message)
      return
    }

    console.log('✅ Usuario creado en Supabase Auth')

    // 2. Crear registro de admin en tu tabla
    if (authData.user) {
      await prisma.adminUser.create({
        data: {
          userId: authData.user.id,
          email: authData.user.email!,
          role: 'SUPER_ADMIN',
          isActive: true
        }
      })
      
      console.log('✅ Registro de admin creado en base de datos')
      console.log('📧 Email:', authData.user.email)
      console.log('🔑 Password: admin123456')
      console.log('🚨 ¡Cambiar contraseña después del primer login!')
    }
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()