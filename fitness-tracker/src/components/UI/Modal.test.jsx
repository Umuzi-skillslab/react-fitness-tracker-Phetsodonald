import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
    test("should render content and closes.", () => {
        const close = jest.fn();

        render(<Modal title="Info" onClose={close}>Content</Modal>);
        expect(screen.getByRole("dialog")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {name: /close/i}));
        expect(close).toHaveBeenCalled();
    })
})