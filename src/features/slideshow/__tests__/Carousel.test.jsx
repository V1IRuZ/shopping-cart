import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router";
import { screen, render, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "../Carousel.jsx";

const mockData = [
  { title: "shirt", id: 1, category: "clothes" },
  { title: "LG CX10", id: 2, category: "televisions" },
  { title: "ring", id: 3, category: "jewelry" },
  { title: "football", id: 4, category: "sport" },
];

describe("Carousel component", () => {
  it("next button moves slide", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: "Next" });

    await user.click(button);

    const slideshow = screen.getByTestId("slideshow");

    expect(slideshow).toHaveStyle("transform: translateX(-100%)");
  });

  it("previous button moves slide", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: "Previous" });

    await user.click(button);

    const slideshow = screen.getByTestId("slideshow");

    expect(slideshow).toHaveStyle("transform: translateX(-300%)");
  });

  it("slide selection bar button changes slide", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: "Slide 3" });

    await user.click(button);

    const slideshow = screen.getByTestId("slideshow");

    expect(slideshow).toHaveStyle("transform: translateX(-200%)");
  });

  it("automatically changes slides after 5 seconds", () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>,
    );

    const slideshow = screen.getByTestId("slideshow");

    expect(slideshow).toHaveStyle("transform: translateX(0%)");

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(slideshow).toHaveStyle("transform: translateX(-100%)");

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(slideshow).toHaveStyle("transform: translateX(-300%)");

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(slideshow).toHaveStyle("transform: translateX(0%)");
  });

  it("pause button stops slideshow", () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", { name: /pause slideshow/i });
    const slideshow = screen.getByTestId("slideshow");

    expect(slideshow).toHaveStyle("transform: translateX(0%)");

    fireEvent.click(button);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(slideshow).toHaveStyle("transform: translateX(0%)");
  });

  it("play button continues slideshow after pause", () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter>
        <Carousel data={mockData} />
      </MemoryRouter>,
    );

    const pauseBtn = screen.getByRole("button", { name: /pause slideshow/i });
    const slideshow = screen.getByTestId("slideshow");

    expect(slideshow).toHaveStyle("transform: translateX(0%)");

    fireEvent.click(pauseBtn);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(slideshow).toHaveStyle("transform: translateX(0%)");

    const playBtn = screen.getByRole("button", { name: /play slideshow/i });

    fireEvent.click(playBtn);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(slideshow).toHaveStyle("transform: translateX(-100%)");
  });
});
