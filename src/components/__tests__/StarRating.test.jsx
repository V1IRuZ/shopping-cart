import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import StarRating from "../StarRating.jsx";

describe("StarRating component", () => {
  it("renders 5 stars", () => {
    render(<StarRating rating={5} />);

    expect(screen.getByTestId("0")).toBeInTheDocument();
    expect(screen.getByTestId("1")).toBeInTheDocument();
    expect(screen.getByTestId("2")).toBeInTheDocument();
    expect(screen.getByTestId("3")).toBeInTheDocument();
    expect(screen.getByTestId("4")).toBeInTheDocument();
  });

  it("render stars in the correct color based on the rating", () => {
    render(<StarRating rating={3} />);

    expect(screen.getByTestId("0")).toHaveAttribute("fill", "gold");
    expect(screen.getByTestId("1")).toHaveAttribute("fill", "gold");
    expect(screen.getByTestId("2")).toHaveAttribute("fill", "gold");
    expect(screen.getByTestId("3")).toHaveAttribute("fill", "white");
    expect(screen.getByTestId("4")).toHaveAttribute("fill", "white");
  });

  it("renders a partial star (decimal) in a different color", () => {
    render(<StarRating rating={3.32} />);

    expect(screen.getByTestId("0")).toHaveAttribute("fill", "gold");
    expect(screen.getByTestId("1")).toHaveAttribute("fill", "gold");
    expect(screen.getByTestId("2")).toHaveAttribute("fill", "gold");
    expect(screen.getByTestId("3")).toHaveAttribute("fill", "#fdec8a");
    expect(screen.getByTestId("4")).toHaveAttribute("fill", "white");
  });
});
