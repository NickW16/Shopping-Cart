import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MainPage from "../components/MainPage.jsx";

// test for testing lol
describe('something truthy and falsy', () => {
   it('true to be true', () => {
      expect(true).toBe(true);
   });

   it('false to be false', () => {
      expect(false).toBe(false);
   });
});


describe('Correct information is being displayed', () => {
   it("renders correct heading", () => {
      render(<MainPage />);
      expect(screen.getByText('Aramaker: A Melhor em impressão 3D!')).toBeInTheDocument();  
   });

   it("renders correct production info", () => {
      render(<MainPage />);
      expect(screen.getByText(/Prazo de Produção:/i)).toBeInTheDocument();
      expect(screen.getByText(/Produtos em estoque: envio em até 3 dias úteis/i)).toBeInTheDocument();
      expect(screen.getByText(/Produtos sob encomenda: 10-15 dias úteis/i)).toBeInTheDocument();
   });
   
   it("renders buttons information correctly", () => {
      render(<MainPage />);
      expect(screen.getAllByRole("heading", { level: 3 })); 
   });
});


