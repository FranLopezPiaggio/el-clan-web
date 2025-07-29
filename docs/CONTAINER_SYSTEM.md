# Sistema de Contenedores - El Clan Web

## Descripción General

Este proyecto implementa un sistema de contenedores profesional que limita el ancho máximo del contenido a **1400px** mientras permite que los backgrounds de las secciones se extiendan completamente.

## Variables CSS

Las siguientes variables están definidas en `src/globals.css`:

```css
:root {
  --max-width: 1400px;
  --container-padding: 1rem;
}
```

### Breakpoints Responsive

- **Mobile (< 768px)**: `--container-padding: 1rem`
- **Tablet (≥ 768px)**: `--container-padding: 2rem`
- **Desktop (≥ 1024px)**: `--container-padding: 3rem`

## Clase `.container`

La clase principal que debes usar para limitar el contenido:

```css
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
  width: 100%;
}
```

## Cómo Usar

### 1. Estructura Básica de Sección

```tsx
<section className={styles.section}>
  <div className="container">
    {/* Tu contenido aquí */}
  </div>
</section>
```

### 2. Ejemplo Completo

```tsx
const MySection: React.FC = () => {
  return (
    <section className={styles.mySection}>
      {/* El background se extiende completamente */}
      <div className="container">
        {/* El contenido se limita a 1400px */}
        <h2>Mi Título</h2>
        <p>Mi contenido...</p>
      </div>
    </section>
  );
};
```

### 3. Estilos CSS

```css
.mySection {
  padding: 4rem 0;
  background-color: #1a1a1a; /* Se extiende completamente */
}

/* El contenido dentro de .container se centra y limita */
```

## Componentes Actualizados

Los siguientes componentes ya implementan este sistema:

- ✅ **Header**: Usa `--max-width` en su contenedor interno
- ✅ **Hero**: Contenido envuelto en `.container`
- ✅ **Catalog**: Contenido envuelto en `.container`
- ✅ **Story**: Contenido envuelto en `.container`
- ✅ **Footer**: Contenido envuelto en `.container`

## Ventajas del Sistema

1. **Consistencia**: Todos los componentes usan el mismo ancho máximo
2. **Responsive**: Padding adaptativo según el tamaño de pantalla
3. **Flexibilidad**: Los backgrounds pueden extenderse completamente
4. **Mantenibilidad**: Cambios centralizados en variables CSS
5. **Profesional**: Estructura estándar de la industria

## Personalización

Para cambiar el ancho máximo, modifica la variable en `src/globals.css`:

```css
:root {
  --max-width: 1200px; /* Cambiar a tu preferencia */
}
```

## Mejores Prácticas

1. **Siempre** envuelve el contenido de las secciones en `.container`
2. **Nunca** apliques `max-width` directamente a las secciones
3. **Usa** las variables CSS para mantener consistencia
4. **Considera** el padding responsive en tus diseños
5. **Mantén** los backgrounds en las secciones, no en los contenedores 