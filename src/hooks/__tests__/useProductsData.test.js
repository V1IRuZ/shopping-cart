import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useProductData } from "../useProductsData.js";

const mockProducts = [
  {
    title: "mock title",
    id: 1,
    category: "mock category",
  },
];

const mockedError = new Error("mocked error");

describe("useProductsData", () => {
  it("loading should initially be true and then false", async () => {
    const { result } = renderHook(() => useProductData());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it("renders data", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        products: mockProducts,
      }),
    });

    const { result } = renderHook(() => useProductData());

    await waitFor(() =>
      expect(result.current).toEqual({
        data: [
          {
            title: "mock title",
            id: 1,
            category: "mock category",
            isDiscount: false,
          },
        ],
        error: null,
        loading: false,
      }),
    );
  });

  it("throws an error when data is not fetched succesfully", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(mockedError);

    const { result } = renderHook(() => useProductData());

    await waitFor(() => {
      expect(result.current.error).toBe(mockedError);
    });
  });
});
