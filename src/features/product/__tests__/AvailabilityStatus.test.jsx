import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AvailabilityStatus from "../AvailabilityStatus.jsx";

const mockAvailibityInStock = "In Stock";
const mockAvailibityLowStock = "Low Stock";

describe("AvailabilityStatus component", () => {
  it("renders in-stock product with a green icon and text", () => {
    render(<AvailabilityStatus availability={mockAvailibityInStock} />);

    const icon = screen.getByTestId("high");

    expect(screen.getByText("In Stock")).toBeInTheDocument();
    expect(icon).toHaveAttribute("stroke", "green");
  });

  it("renders low stock product with orange icon and text", () => {
    render(<AvailabilityStatus availability={mockAvailibityLowStock} />);

    const icon = screen.getByTestId("low");

    expect(screen.getByText("Low Stock")).toBeInTheDocument();
    expect(icon).toHaveAttribute("stroke", "orange");
  });
});
