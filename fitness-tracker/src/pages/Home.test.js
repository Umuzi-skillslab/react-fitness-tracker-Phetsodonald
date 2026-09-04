import {render,screen} from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router';

describe("Home", () => {
    test('should render home content and audio',()=>{
        const {container}=render(<MemoryRouter><Home/></MemoryRouter>);
        expect(screen.getByText(/Build your routine/)).toBeInTheDocument();
        expect(container.querySelector('audio')).toHaveAttribute('controls')}
    );
})

