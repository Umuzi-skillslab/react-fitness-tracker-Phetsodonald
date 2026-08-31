import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
    test("should render title and children", () => {
        render(
            <Card title="Hello">content</Card>
        );

        expect(screen.getByRole("heading", {name: /hello/i })).toBeInTheDocument();
        expect(screen.getByText("content")).toBeInTheDocument();
    });
});