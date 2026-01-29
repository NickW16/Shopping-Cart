import { Link } from 'react-router';
import { products } from '../data/products.js';
import styles from './ProductCard.module.css';

const ProductCard = ({ id }) => {
   return (
      <div className={styles.productContainer}>
         <img 
            src={products[id].images[2]} 
            alt={products[id].name}
            className={styles.productImage}
         />
         <div className={styles.productInfo}>
            <span className={styles.category}>{products[id].category}</span>
            <h2 className={styles.productTitle}>{products[id].name}</h2>
            <p className={styles.priceSection}>{products[id].description}</p>
            <div className={styles.priceSection}>
               <span className={styles.price}>R$ {products[id].price}</span>
            </div>
            <button className={styles.viewButton}>Ver Detalhes</button>
         </div>
      </div>
   )
}

export default ProductCard;
