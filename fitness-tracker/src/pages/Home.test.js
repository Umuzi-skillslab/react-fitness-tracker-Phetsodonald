import {render,screen} from '@testing-library/react';
import Home from './Home';

describe("Home", () => {
    test('should render home content and audio',()=>{
        const {container}=render(<Home/>);
        expect(screen.getByText(/Build your routine/)).toBeInTheDocument();
        expect(container.querySelector('audio')).toHaveAttribute('controls')}
    );
})

