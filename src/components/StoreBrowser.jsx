import { products } from '../data/products.js';
import styles from './StoreBrowser.module.css';
import ProductCard from './ProductCard.jsx';

const StoreBrowser = () => {
   return (
      <div className={styles.mainContainer}>
         <h1 className={styles.title}>Nossa loja</h1>
         <p>Aqui, é possível explorar os itens da loja</p>         
         <ProductCard />
      </div>
   )
}

export default StoreBrowser;
