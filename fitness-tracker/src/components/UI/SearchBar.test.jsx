import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
    test("should update and submit search", async () => {
        const func = jest.fn();
        const user = userEvent.setup();

        render(
            <SearchBar
                onSearch={func}
                onClear={jest.fn()}
            />
        );

        await user.type(
            screen.getByPlaceholderText("Search exercises..."),
            "push"
        );

        await user.click(
            screen.getByRole("button", { name: /search/i })
        );

        expect(func).toHaveBeenCalledWith("push");
    });

    test("should clear calls callback", async () => {
        const clear = jest.fn();
        const user = userEvent.setup();

        render(
            <SearchBar
                onSearch={jest.fn()}
                onClear={clear}
                searchTerm="test"
            />
        );

        await user.click(
            screen.getByRole("button", { name: "Clear" })
        );

        expect(clear).toHaveBeenCalled();
    });
});