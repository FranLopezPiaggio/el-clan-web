import styles from '@/styles/ProductCard.module.css';

export interface Product {
    id: number;
    name: string;
    description: string;
    type: string; // IPA, Lager, Stout, etc.
    abv: number; // Alcohol by volume
    ibu?: number; // International Bitterness Units
    image: string;
    price?: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
                <div className={styles.badge}>{product.type}</div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>

                <div className={styles.specs}>
                    <div className={styles.spec}>
                        <span className={styles.specLabel}>ABV</span>
                        <span className={styles.specValue}>{product.abv}%</span>
                    </div>
                    {product.ibu && (
                        <div className={styles.spec}>
                            <span className={styles.specLabel}>IBU</span>
                            <span className={styles.specValue}>{product.ibu}</span>
                        </div>
                    )}
                </div>

                {product.price && (
                    <div className={styles.price}>${product.price}</div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
