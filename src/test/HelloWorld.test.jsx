import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import { expect, test } from "vitest";

test("renders hello world message", () => {
    render(<HelloWorld />);
    const linkElement = screen.getByText(/hello, world!/i);
    expect(linkElement).toBeInTheDocument();
});
