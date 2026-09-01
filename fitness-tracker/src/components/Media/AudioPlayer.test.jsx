import { render, screen } from "@testing-library/react";
import AudioPlayer from "./AudioPlayer";
import { describe } from "vitest";

describe("AudioPlayer", () => {
    test('should render audio controls',()=>{
        const {container}=render(<AudioPlayer audioUrl="test.mp3" title="Motivation"/>);
        expect(container.querySelector('audio')).toHaveAttribute('controls');
        expect(screen.getByText('Motivation')).toBeInTheDocument()}
    );

})