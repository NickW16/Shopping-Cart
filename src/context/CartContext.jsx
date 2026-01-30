import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
   const context = useContext(CartContext);
   if(!context) {
      throw new Error('useCart must be used within CartProvider');
   }
   return context;
};

export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);

   const addToCart = (product) => {
      console.log('Adding product:', product); // Debug: check what's being added
      console.log('Product images:', product.images[0]); // Debug: verify images exist
      setCartItems(prevItems => {
         // check if product is already in the cart
         const existingItem = prevItems.find(item => item.id === product.id);

         if (existingItem) {
            // increase quantity if exists
            return prevItems.map(item =>
               item.id === product.id
                  ? {...item, quantity: item.quantity + 1}
                  : item
            );
         } else {
            // add new item 
            return [...prevItems, {
               id: product.id,
               name: product.name,
               price: product.price, 
               images: product.images[0], //store only first image
               quantity: 1,
            }];
         }
      });
   };

   const removeFromCart = (productId) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
   };

   const updateQuantity = (productId, quantity) => {
      if (quantity <= 0) {
         removeFromCart(productId);
         return;
      }

      setCartItems(prevItems =>
         prevItems.map(item =>
            item.id === productId
               ? { ...item, quantity }
               : item
            )
      );
   };

   const clearCart = () => {
      setCartItems([]);
   };

   const getCartTotal = () => {
      return cartItems.reduce((total,item) => total + (item.price * item.quantity), 0);
   };

   const getCartCount = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0); 
   }

   return (
      <CartContext.Provider value={{
         cartItems,
         addToCart,
         removeFromCart,
         updateQuantity,
         clearCart,
         getCartTotal,
         getCartCount,
      }}>
         {children}
      </CartContext.Provider>
   );
};
