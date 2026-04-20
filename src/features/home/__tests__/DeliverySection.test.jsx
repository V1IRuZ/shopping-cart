import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import DeliverySection from "../DeliverySection.jsx";

describe("DeliverySection component", () => {
  it("renders banner text", () => {
    render(<DeliverySection />);

    expect(screen.getByText("FAST AND RELIABLE DELIVERY")).toBeInTheDocument();
  });

  it("renders 7 icons", () => {
    render(<DeliverySection />);

    const icons = screen.getAllByTestId("icon");
    expect(icons).toHaveLength(7);
  });
});
