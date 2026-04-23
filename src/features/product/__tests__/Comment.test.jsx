import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Comment from "../Comment.jsx";

const mockReview = {
  reviewerName: "Jack",
  date: "5/22/2025",
  rating: 3,
  comment: "awesome product",
};

describe("Comment component", () => {
  it("renders reviewer name correctly", () => {
    render(<Comment review={mockReview} />);

    expect(screen.getByText("Jack")).toBeInTheDocument();
  });

  it("renders comment correctly", () => {
    render(<Comment review={mockReview} />);

    expect(screen.getByText("awesome product")).toBeInTheDocument();
  });

  it("renders date correctly", () => {
    render(<Comment review={mockReview} />);

    expect(screen.getByText("22.5.2025")).toBeInTheDocument();
  });

  it("renders rating correctly", () => {
    render(<Comment review={mockReview} />);

    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });
});
