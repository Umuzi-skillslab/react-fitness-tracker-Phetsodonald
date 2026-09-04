import {render,screen} from '@testing-library/react';
import App from '../App';

test('renders navigation and home',()=>{
    render(<App/>);
    expect(screen.getByText('OnTrack')).toBeInTheDocument();
    expect(screen.getByText(/Build your routine/)).toBeInTheDocument()}
);
