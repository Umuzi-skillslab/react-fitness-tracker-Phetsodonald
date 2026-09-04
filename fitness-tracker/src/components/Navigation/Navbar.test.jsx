import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("should render navigation links.", () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );

    expect(
        screen.getByRole("link", { name: "Home" })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("link", { name: "Exercises" })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("link", { name: "Workout-Planner" })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("link", {name: "Progress"})
    ).toBeInTheDocument();

    expect(
        screen.getByRole("link", {name: "History"})
    ).toBeInTheDocument();
});