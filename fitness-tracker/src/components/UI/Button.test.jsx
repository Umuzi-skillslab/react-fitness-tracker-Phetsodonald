import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {

    test("should use primary variant as a default", () => {
        render(<Button>Primary</Button>);

        const button = screen.getByRole("button", {
            name: /primary/i
        });

        expect(button).toBeInTheDocument();
    });

    test("should apply secondary variant", () => {
        render(
            <Button variant="secondary">
                Secondary
            </Button>
        );

        const button = screen.getByRole("button", {
            name: /secondary/i
        });

        expect(button).toBeInTheDocument();
    });

    test("should apply danger variant", () => {
        render(
            <Button variant="danger">
                Delete
            </Button>
        );

        const button = screen.getByRole("button", {
            name: /delete/i
        });

        expect(button).toBeInTheDocument();
    });

    test("should call onClick when clicked", () => {
        const mockOnClick = vi.fn();

        render(
            <Button onClick={mockOnClick}>
                Click Me
            </Button>
        );

        const button = screen.getByRole("button", {
            name: /click me/i
        });

        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("should check if button can be disabled", () => {
        render(
            <Button disabled>
                Disabled
            </Button>
        );

        const button = screen.getByRole("button", {
            name: /disabled/i
        });

        expect(button).toBeDisabled();
    });

    test("should apply correct type of button", () => {
        render(
            <Button type="submit">
                Submit
            </Button>
        );

        const button = screen.getByRole("button", {
            name: /submit/i
        });

        expect(button).toHaveAttribute("type", "submit");
    });
});