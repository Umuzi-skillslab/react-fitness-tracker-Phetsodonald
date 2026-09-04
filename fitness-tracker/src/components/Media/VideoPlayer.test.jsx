import { render, screen } from "@testing-library/react";
import VideoPlayer from "./VideoPlayer";

describe("VideoPlayer", () => {
    test('should render video title',()=>{
        render(<VideoPlayer videoUrl="test.mp4" title="Demo"/>);
        expect(screen.getByRole('heading',{name:'Demo'})).toBeInTheDocument()}
    );

    test('should render video element',()=>{
        const {container}=render(<VideoPlayer videoUrl="test.mp4" title="Demo"/>);
        expect(container.querySelector('video')).toHaveAttribute('controls')}
    );
})