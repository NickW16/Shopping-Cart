import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router';
import { CartProvider } from '../context/CartContext';
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

describe("Renders all of apps funcionalities", () => {
   it('shows correct navigation buttons', () => {
      render(
      <BrowserRouter>
         <CartProvider>
            <App /> 
         </CartProvider>
      </BrowserRouter>
      );
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
      expect(screen.getByText(/Loja/i)).toBeInTheDocument();
      expect(screen.getByText(/Carrinho/i)).toBeInTheDocument();
   });
});

describe("Render correct footer info", () => {
   it('shows footer info accordingly', () => {
      render(
      <BrowserRouter>
         <CartProvider>
            <App /> 
         </CartProvider>
      </BrowserRouter>
      );
      expect(screen.getByText(/2026 Aramaker - Todos os direitos reservados/i)).toBeInTheDocument();
   });
});
