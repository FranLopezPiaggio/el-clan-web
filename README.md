# 🍺 El Clan - Cerveza Artesanal

Plataforma web moderna para la venta de cerveza artesanal El Clan, construida con Next.js 15, TypeScript, Prisma y Supabase.

## 🚀 Características

- **Catálogo de Productos**: Visualización elegante de cervezas con filtros avanzados
- **Carrito de Compras**: Gestión de pedidos con persistencia local
- **Panel de Administración**: CMS completo para gestión de productos y pedidos
- **Autenticación**: Sistema seguro con Supabase Auth
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Diseño Responsivo**: Optimizado para móviles y desktop
- **PWA Ready**: Preparado para instalación como aplicación

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, CSS Modules
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Autenticación**: Supabase Auth
- **Deployment**: Vercel (recomendado)
- **Validación**: Zod
- **Animaciones**: Framer Motion

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/el-clan-web.git
   cd el-clan-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus credenciales:
   ```env
   DATABASE_URL="postgresql://..."
   DIRECT_URL="postgresql://..."
   NEXT_PUBLIC_SUPABASE_URL="https://..."
   NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
   SUPABASE_SERVICE_ROLE_KEY="..."
   ```

4. **Configurar la base de datos**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

5. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── admin/             # Panel de administración
│   ├── api/               # API Routes
│   └── auth/              # Páginas de autenticación
├── components/            # Componentes reutilizables
│   ├── admin/            # Componentes del panel admin
│   ├── catalog/          # Componentes del catálogo
│   ├── orders/           # Componentes de pedidos
│   └── ui/               # Componentes de UI base
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── styles/               # Estilos globales y módulos
├── types/                # Definiciones de TypeScript
└── services/             # Servicios de API
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Verde Principal**: `#476946` (El Clan Green)
- **Rojo**: `#873b39` (Acentos)
- **Dorado**: `#ac8744` (Cerveza)
- **Negro**: `#000000` (Texto)

### Tipografías
- **Grenze**: Títulos y elementos principales
- **Brewski**: Texto de marca (personalizada)

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo con Turbopack
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run db:seed      # Poblar base de datos
```

## 📱 Funcionalidades Principales

### Catálogo de Productos
- Filtrado por categoría, tipo de cerveza y stock
- Búsqueda por nombre y descripción
- Paginación infinita
- Estados de carga y error

### Carrito de Compras
- Persistencia en localStorage
- Gestión de cantidades
- Cálculo automático de totales
- Integración con WhatsApp para pedidos

### Panel de Administración
- CRUD completo de productos
- Gestión de categorías
- Dashboard de pedidos
- Control de usuarios admin

## 🔒 Seguridad

- Validación de datos con Zod
- Autenticación con Supabase
- Autorización basada en roles
- Sanitización de inputs
- Rate limiting en APIs

## 🚀 Deployment

### Vercel (Recomendado)
1. Conectar repositorio en Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

### Variables de Entorno Requeridas
```env
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

- **Email**: contacto@elclan.com
- **WhatsApp**: +54 9 11 1234-5678
- **Instagram**: @elclan.cerveza

---

Desarrollado con ❤️ para El Clan Cerveza Artesanal
