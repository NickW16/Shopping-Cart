import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { products } from '../data/products.js';
import styles from './ProductCard.module.css';

const ProductCard = ({ id }) => {
   const { addToCart } = useCart();
   
   const handleAddToCart = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(products[id]);
   };

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
            <button 
               type="button"
               className={styles.addButton}
               onClick={handleAddToCart}
            >
               Adicionar ao Carrinho
            </button>
         </div>
      </Link>
   )
}

export default ProductCard;
