import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
                  <h1>Aramaker</h1>
                  <p>Soluções em impressão 3D</p>
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
