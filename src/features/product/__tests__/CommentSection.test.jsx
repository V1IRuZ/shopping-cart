import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentSection from "../CommentSection.jsx";

const mockReviews = [
  {
    reviewerName: "Jack",
    date: "5/22/2025",
    rating: 3,
    comment: "average product",
  },
  {
    reviewerName: "Jane",
    date: "5/22/2025",
    rating: 4,
    comment: "good product",
  },
  {
    reviewerName: "Matt",
    date: "5/22/2025",
    rating: 3,
    comment: "awesome product",
  },
];

describe("CommentSection component", () => {
  it("renders header", () => {
    render(<CommentSection reviews={mockReviews} />);

    expect(screen.getByText("COMMENTS")).toBeInTheDocument();
  });

  it("renders list with 3 comments", () => {
    render(<CommentSection reviews={mockReviews} />);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });
});
