import { useCart } from '../context/CartContext';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
   const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

   if (cartItems.length === 0) {
      return (
         <div className={styles.emptyCart}>
            <h1>Seu Carrinho está Vazio</h1>
            <p>Adicione alguns produtos incríveis da nossa loja!</p>
            <a href="/store-browser" className={styles.shopButton}>
               Ir para a Loja
            </a>
         </div>
      );
   }

   return (
      <div className={styles.cartContainer}>
         <h1>Seu Carrinho</h1>
         
         <div className={styles.cartItems}>
            {cartItems.map(item => (
               <div key={item.id} className={styles.cartItem}>
                  <img src={item.images[0]} alt={item.name} />
                  <div className={styles.itemInfo}>
                     <h3>{item.name}</h3>
                     <p className={styles.itemPrice}>R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.quantityControls}>
                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        -
                     </button>
                     <span>{item.quantity}</span>
                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                     </button>
                  </div>
                  <div className={styles.itemTotal}>
                     <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                     <button 
                        onClick={() => removeFromCart(item.id)}
                        className={styles.removeButton}
                     >
                        Remover
                     </button>
                  </div>
               </div>
            ))}
         </div>

         <div className={styles.cartSummary}>
            <h2>Resumo do Pedido</h2>
            <div className={styles.summaryRow}>
               <span>Subtotal:</span>
               <span>R$ {getCartTotal().toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
               <span>Frete:</span>
               <span>A calcular</span>
            </div>
            <div className={styles.totalRow}>
               <span>Total:</span>
               <span>R$ {getCartTotal().toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>
               Finalizar Compra
            </button>
            <button className={styles.clearButton} onClick={clearCart}>
               Limpar Carrinho
            </button>
         </div>
      </div>
   );
};

export default ShoppingCart;
