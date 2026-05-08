import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ShippingInformation from "../ShippingInformation.jsx";

const mockShipping = "1-2 days";

describe("ShippingInformation component", () => {
  it("renders shipping information text", () => {
    render(<ShippingInformation shipping={mockShipping} />);

    expect(screen.getByText("1-2 days")).toBeInTheDocument();
  });

  it("renders van icon", () => {
    render(<ShippingInformation shipping={mockShipping} />);

    expect(screen.getByTestId("van")).toBeInTheDocument();
  });
});
