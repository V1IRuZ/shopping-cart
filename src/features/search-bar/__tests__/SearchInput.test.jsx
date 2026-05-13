import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { testData } from "../../../tests/test-data.js";
import SearchInput from "../SearchInput.jsx";
import userEvent from "@testing-library/user-event";
import { ShopContext } from "../../../context/ShopContext.js";

const data = testData;

describe("SearchInput component", () => {
  it("renders search bar", () => {
    render(
      <MemoryRouter>
        <ShopContext value={{data}}>
          <SearchInput />
        </ShopContext>
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("renders search results", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ShopContext value={{data}}>
          <SearchInput />
        </ShopContext>
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "po");

    const list = screen.getByRole("list");
    const listItems = within(list).getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });

  it("renders an exact match", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ShopContext value={{data}}>
          <SearchInput />
        </ShopContext>
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "chair");

    const list = screen.getByRole("list");
    const result = within(list).getByRole("link", { name: /chair/i });

    expect(list).toBeInTheDocument();
    expect(result).toBeInTheDocument();
  });

  it("the search result link redirects to the right page", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ShopContext value={{data}}>
          <SearchInput />
        </ShopContext>
      </MemoryRouter>,
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "bed");

    const list = screen.getByRole("list");
    const result = within(list).getByRole("link", { name: /bed/i });

    expect(result).toHaveAttribute("href", "/shop/furniture/1");
  });
});
