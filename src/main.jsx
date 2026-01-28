import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import './index.css'
import App from './App.jsx'
import MainPage from './components/MainPage.jsx'
import StoreBrowser from './components/StoreBrowser.jsx'
import ShoppingCart from './components/ShoppingCart.jsx'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         { index: true, element: <MainPage /> },
         { path: "main-page", element: <Navigate to="/" replace /> },
         { path: "store-browser", element: <StoreBrowser /> },
         { path: "shopping-cart", element: <ShoppingCart /> },
      ]
   }
])   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
