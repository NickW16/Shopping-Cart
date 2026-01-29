import { Link } from 'react-router';
import { products } from '../data/products.js';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
   return (
      <div className={styles.productContainer}>
         <img 
            src={products[0].images[2]} 
            alt={products[0].name}
            className={styles.productImage}
         />
         <div className={styles.productInfo}>
            <span className={styles.category}>{products[0].category}</span>
            <h2 className={styles.productTitle}>{products[0].name}</h2>
            <p className={styles.priceSection}>{products[0].description}</p>
            <div className={styles.priceSection}>
               <span className={styles.price}>R$ {products[0].price}</span>
            </div>
            <button className={styles.viewButton}>Ver Detalhes</button>
         </div>
      </div>
   )
}

export default ProductCard;
