import { useState } from 'react'
import { CartProvider, useCart } from './context/CartContext';
import AramakerLogo from './assets/aramaker-logo.png';
import './App.css'
import { Link, Outlet } from "react-router";


function AppContent() {
   const { getCartCount } = useCart();

  return (
    <>
     <div className="app-container">
         <header className="header">
            <div className="header-content">
               <div className="brand">
                  <img src={AramakerLogo} alt="Aramaker Logo" className="aramaker-logo" />
                  <p>Sua forja de Cosplays Épicos!</p>
               </div>
              <nav className="nav-bar">
                 <Link to="/" className="nav-link">Home</Link>
                 <Link to="/store-browser" className="nav-link">Loja</Link>
                 <Link to="/shopping-cart" className="nav-link">
                  Carrinho {getCartCount() > 0 && `(${getCartCount()})`}
                  </Link>
               </nav>
            </div>
         </header>
      <main className="main-content">
        <Outlet />
      </main>

     <footer className="footer">
        <p>&copy; 2026 Aramaker - Todos os direitos reservados</p>
      </footer>
     </div>
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App
