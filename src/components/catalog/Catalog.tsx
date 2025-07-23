import React from 'react';
import styles from '@/styles/Catalogo.module.css';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen_url: string;
  stock: number;
  activo: boolean;
}

interface CatalogoProps {
  productos?: Producto[];
  onAddToCart?: (productId: number) => void;
  cartItemCount?: number;
}

const productosDemo: Producto[] = [
  {
    id: 1,
    nombre: "Golden Ale",
    descripcion: "Crisp and refreshing with a hint of citrus.",
    precio: 12.99,
    imagen_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsxT0ghxkc0Vn7l0bX3nEjcI3e1F87NcmEALqvvD9IhDUvv4Flp5veoWFYT0SoWTYupXMmsJ199bdEtC2tXbEIok4x8KyYQAh2mIZO8wrbDyHrgN-5kxPMOh4T-RTRAxoXnooGuAexWBaqqAiDIyT8gjKcsn1TRFw15WlcdHIecSiJNxOcq4vaRQKo-muCTvc4w2GO-dw5UUHP04j4UtCq3B27EJMIhPykZJlEoTygODu3GQVEld2M7xnvkk2-lTAwFIZyG6wR7tEp",
    stock: 15,
    activo: true
  },
  {
    id: 2,
    nombre: "Amber Lager",
    descripcion: "Smooth and malty with a balanced bitterness.",
    precio: 11.99,
    imagen_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt6PEj5HcWbCZoIn-poCJblWkIJHCyKaQeilvMOhw9Uvx652yVsEfOt1nSfpiF78k9NS1-F0l_drQY-rM404v2at-0MlAU12IyufzQD1_J6pvT7Hjft1deCHpnt0gkns8kzjvZmDZ8CCGTOtkfhEMaVRXCCK3Svc9BSJxelgdItJ5VuY9pNxIORv-wLeVGbFbnjX5dl-_1dSUaysgbe1SjemjNqP9ja1QjSojSI2RUnO7FyxgzZ9qvocPGbZb77ZIlC4XEjUPh1bFv",
    stock: 12,
    activo: true
  },
  {
    id: 3,
    nombre: "Dark Stout",
    descripcion: "Rich and creamy with notes of chocolate and coffee.",
    precio: 13.99,
    imagen_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1bqGbyD-yOv_nZ_Srq8Ld-1j2Q7kYlDtwfP9IRHVbeWe6pQA8Z1p5kRGhZC8OmFpN2zlc0di-O2zlKn2yx1Zt6ES5QfpKKBJsU_uIU9qRI6k5LU1VOCH1QL1wCvC-b5E9-cGUS60lEPx144wAoYmG1MSMGkK19cLCkhfwFjsc_HPHB2Sbfl68CQbVyG0smX7c20I4klVoVAlZ9e3sRflQ_8VMJ349zHvBgTyYrcXKpdINQKw88_CcoMnP3ZZ0zMckRIqQ-BcgUioK",
    stock: 8,
    activo: true
  },
  {
    id: 4,
    nombre: "Wheat Beer",
    descripcion: "Light and fruity with a subtle spice.",
    precio: 10.99,
    imagen_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhQS18sr8ojsqyBbxNNfKeX2dPkG6y4RbPUJjRmCkMB6wh4rYPxIrz6PyDtwnf44PbgAY6EzwMcWLPMZqaArgJmFWhgL_BSWDMrBE-q3BL5G504o-IITWfe2fefzafmvB0q5p5PR-SkCebKxqwuOcnEgNWYrcXi-gwPtKKnl7pNai3JvFJB9BrlTrIrkSdXR0EYN2jxdAOvPt5vmWnXEZ0YQYSIp0FAnDv1HFz-A9Ow5wxepZRw9z14vCzVjfP9TSYOm_7l8El9zxG",
    stock: 20,
    activo: true
  },
  {
    id: 5,
    nombre: "Pale Ale",
    descripcion: "Hop-forward with a balanced malt profile.",
    precio: 12.49,
    imagen_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsYUn7ZWF27nRpbysIsKspuNQSeVDylyp9Z37iILa6MkVMaPVfqT1ru5x0RnGT8uJD8HFvGOziUNToeoHZpZBmYwJtbGvzdT_bSlWhoXjMParGU7PTwzx8u154p_ZnhL7jFATTQAWh3-sJtqnGYUbzKdcKdcru3gChCGYYZUrzlYNmepnHdQIc3wp8X1Ny6TNvUFKVPOdvkmoJigysT1-VI52Ao4bqY9kUpEFYoK8kCF29fZCfDBzkaUtSORarr1jiZGJ0KT8uu_QO",
    stock: 18,
    activo: true
  },
  {
    id: 6,
    nombre: "IPA",
    descripcion: "Intensely hoppy with a bold flavor.",
    precio: 13.49,
    imagen_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKyUQS11-aFB6KGm-e7m4yfL4nbUg4F0PEXx99PvAtJko2erXii4mGL2Sfe23aevc4RwSO6WaSFIKFsLLvk2exL2IQox8Gx8weh73i9IhxbmJSiu_LyOYAq-VewfF1xVIkpWRuPxBBR_vNxmVkR6F2jvTx532VvJWtFAuucrNqMvCQH0_8ZgIMVARQKTZhiJyJTWZLF0Qi5g0_YF5-QmjO9C4zKbObRUzVc5U2cZHwJfzohJDSQRmtQWwjFGntr94a8NOZhd1tuxxH",
    stock: 10,
    activo: true
  }
];

const Catalog: React.FC<CatalogoProps> = ({ 
  productos = productosDemo, 
  onAddToCart,
  cartItemCount = 0 
}) => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className={styles.logoText}>Brewery Co.</h2>
        </div>
        
        <div className={styles.navigation}>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Our Beers</a>
            <a href="#" className={styles.navLink}>Visit Us</a>
            <a href="#" className={styles.navLink}>Events</a>
            <a href="#" className={styles.navLink}>Shop</a>
          </div>
          <button className={styles.cartButton}>
            Cart ({cartItemCount})
          </button>
          <div className={styles.avatarPlaceholder}></div>
        </div>
      </header>

      {/* Hero Section with Overlay */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.brandBadge}>
              <h1 className={styles.brandName}>EL CLAN</h1>
              <p className={styles.brandSubtitle}>CERVEZA ARTESANAL</p>
            </div>
            <h2 className={styles.heroTitle}>Estilos de cervezas</h2>
            <div className={styles.beerTypes}>
              <span className={styles.beerType}>DORADA</span>
              <span className={styles.beerType}>IPA</span>
              <span className={styles.beerType}>APA</span>
              <span className={styles.beerType}>PAMPEANA RED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Products Grid */}
          <div className={styles.productsGrid}>
            {productos.filter(producto => producto.activo).map((producto) => (
              <div key={producto.id} className={styles.productCard}>
                <div 
                  className={styles.productImage}
                  style={{ backgroundImage: `url(${producto.imagen_url})` }}
                ></div>
                <div className={styles.productInfo}>
                  <p className={styles.productName}>{producto.nombre}</p>
                  <p className={styles.productDescription}>{producto.descripcion}</p>
                  <div className={styles.priceSection}>
                    <p className={styles.productPrice}>${producto.precio}</p>
                    {producto.stock <= 5 && producto.stock > 0 && (
                      <span className={styles.lowStock}>¡Últimas unidades!</span>
                    )}
                    {producto.stock === 0 && (
                      <span className={styles.outOfStock}>Sin stock</span>
                    )}
                  </div>
                  {onAddToCart && producto.stock > 0 && (
                    <button 
                      className={styles.addToCartBtn}
                      onClick={() => onAddToCart(producto.id)}
                    >
                      Agregar al carrito
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Our Story</a>
            <a href="#" className={styles.footerLink}>Contact Us</a>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
          </div>
          <p className={styles.copyright}>@2024 Brewery Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;