import { useState } from 'react'
import AramakerLogo from './assets/aramaker-logo.png';
import './App.css'
import { Link, Outlet } from "react-router";


function App() {
  const [count, setCount] = useState(0)

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
                 <Link to="/shopping-cart" className="nav-link">Carrinho</Link>
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

export default App
