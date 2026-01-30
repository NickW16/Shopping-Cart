import { Link } from 'react-router';
import { products } from '../data/products.js';
import styles from './ProductCard.module.css';

const ProductCard = ({ id }) => {
   return (
      <Link className={styles.productContainer}>
         <img 
            src={products[id].images[0]} 
            alt={products[id].name}
            className={styles.productImage}
         />
         <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{products[id].name}</h2>
            <p className={styles.productDescription}>{products[id].description}</p>
            <div className={styles.priceSection}>
               <span className={styles.price}>R$ {products[id].price}</span>
            </div>
         </div>
      </Link>
   )
}

export default ProductCard;
