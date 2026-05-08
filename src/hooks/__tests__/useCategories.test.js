import { renderHook} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { testData } from "../../tests/test-data.js";
import { useCategories } from "../useCategories.js";

describe("useCategories", () => {
  it("should filter products on sale", () => {
    const { result } = renderHook(() => useCategories(testData));

    expect(result.current.sale).toHaveLength(2);
  });

  it("should filter furniture products", () => {
    const { result } = renderHook(() => useCategories(testData));

    expect(result.current.furniture).toHaveLength(3);
  });


  it("should filter beauty products", () => {
    const { result } = renderHook(() => useCategories(testData));

    expect(result.current.beauty).toHaveLength(2);
  });


  it("should filter groceries products", () => {
    const { result } = renderHook(() => useCategories(testData));

    expect(result.current.groceries).toHaveLength(2);
  });


  it("should filter fragrances products", () => {
    const { result } = renderHook(() => useCategories(testData));

    expect(result.current.fragrances).toHaveLength(2);
  });
});
