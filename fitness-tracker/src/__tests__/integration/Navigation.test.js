import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('navigates to exercises page',async()=>{
    const user=userEvent.setup();
    render(<App/>);
    await user.click(screen.getByRole('link',{name:'Exercises'}));
    expect(await screen.findByText('Browse Exercises')).toBeInTheDocument()}
);

test('renders 404 route',()=>{
    window.history.pushState({},'', '/invalid-route');
    render(<App/>);
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument()}
);