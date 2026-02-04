import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../context/CartContext";

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe("CartContext runs and manages store correctly", () => {
   it("starts with empty cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.cartItems).toEqual([]);
      expect(result.current.getCartCount()).toBe(0);
   });

   it("adds item to cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      const product = { id: 1, name:"test", price: 50, images: [] };

      act(() => {
         result.current.addToCart(product);
      });

      expect(result.current.cartItems.length).toBe(1);
      expect(result.current.cartItems[0].quantity).toBe(1);
   });

   it("calculates cart total correctly", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      const product1 = { id: 1, name: "Test1", price: 50, images: [] };
      const product2 = { id: 2, name: "Test2", price: 30, images: [] };
      
      act(() => {
         result.current.addToCart(product1);
         result.current.addToCart(product2);
      });
      
      expect(result.current.getCartTotal()).toBe(80);
   });
});
