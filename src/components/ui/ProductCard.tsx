import styles from "@/styles/ProductCard.module.css";
import { Product } from "@/types/products";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className={styles.productCard}>
            {/* Stock Badge */}
            {!product.inStock && <div className={styles.outOfStockBadge}>Agotado</div>}

            {/* Imagen */}
            <div className={styles.imageContainer}>
                {product.image ? (
                    <img src={product.image} alt={product.name} className={styles.image} />
                ) : (
                    <div className={styles.placeholder}>🍺</div>
                )}
            </div>

            {/* Product Info*/}
            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.type}>{product.type.toUpperCase()}</p>

                {product.description && (
                    <p className={styles.description}>{product.description}</p>
                )}

                {/* Specs */}
                {(product.abv || product.ibu) && (
                    <div className={styles.specs}>
                        {product.abv && <span className={styles.spec}>ABV: {product.abv}%</span>}
                        {product.ibu && <span className={styles.spec}>IBU: {product.ibu}</span>}
                    </div>
                )}

                {/* Precio */}
                <div className={styles.footer}>
                    <p className={styles.price}>${product.price}</p>
                    <button
                        className={styles.button}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'Agregar' : 'No disponible'}
                    </button>
                </div>
            </div>



        </article>
    );
};

export default ProductCard;