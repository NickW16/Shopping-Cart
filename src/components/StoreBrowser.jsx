import { products } from '../data/products.js';
import styles from './StoreBrowser.module.css';
import ProductCard from './ProductCard.jsx';

const StoreBrowser = () => {
   return (
      <div className={styles.mainContainer}>
         <h1 className={styles.title}>Nossa loja</h1>
         <div className={styles.itemsContainer}>
            <ProductCard id={0} />
            <ProductCard id={1} />
            <ProductCard id={2} />
            <ProductCard id={3} />
            <ProductCard id={4} />
            <ProductCard id={5} />
            <ProductCard id={6} />
         </div>
      </div>
   )
}

export default StoreBrowser;
