import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useCart } from "../useCart.js";
import { act } from "react";

const mockData = {
  title: "chair",
  id: 1,
  category: "furniture",
  discountPercentage: 10,
  isDiscount: true,
  image: undefined,
  price: 10.0,
};

const mockData2 = {
  title: "table",
  id: 2,
  category: "furniture",
  discountPercentage: 10,
  isDiscount: true,
  image: undefined,
  price: 10.0,
};

describe("useCart", () => {
  it("initial state should be empty array", () => {
    const { result } = renderHook(() => useCart());

    expect(result.current.cart).toEqual([]);
  });

  it("should add product to the cart", async () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.handleAddToCart(mockData);
    });

    await waitFor(() => {
      expect(result.current.cart).toEqual([
        {
          title: "chair",
          id: 1,
          category: "furniture",
          discountPercentage: 10,
          isDiscount: true,
          image: undefined,
          price: 10.0,
          quantity: 1,
        },
      ]);
    });
  });

  it("should add multiple products to the cart", async () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.handleAddToCart(mockData);
    });

    act(() => {
      result.current.handleAddToCart(mockData2);
    });

    await waitFor(() => {
      expect(result.current.cart).toEqual([
        {
          title: "chair",
          id: 1,
          category: "furniture",
          discountPercentage: 10,
          isDiscount: true,
          image: undefined,
          price: 10.0,
          quantity: 1,
        },
        {
          title: "table",
          id: 2,
          category: "furniture",
          discountPercentage: 10,
          isDiscount: true,
          image: undefined,
          price: 10.0,
          quantity: 1,
        },
      ]);
    });
  });

  it("should increase quanitity of the product in the cart", async () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.handleAddToCart(mockData);
    });

    act(() => {
      result.current.handleAddToCart(mockData);
    });

    await waitFor(() => {
      expect(result.current.cart).toEqual([
        {
          title: "chair",
          id: 1,
          category: "furniture",
          discountPercentage: 10,
          isDiscount: true,
          image: undefined,
          price: 10.0,
          quantity: 2,
        },
      ]);
    });
  });
});
