import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('user can add an exercise to the planner',async()=>{
    localStorage.clear();
    const user=userEvent.setup();render(<App/>);
    await user.click(screen.getByRole('link',{name:'Exercises'}));
    await screen.findByText('Push-ups');
    await user.click(screen.getAllByRole('button',{name:'Add to Plan'})[0]);
    await user.click(screen.getByRole('link',{name:'Workout Planner'}));
    expect(screen.getByText('Push-ups')).toBeInTheDocument()}
);

test('user can log a workout',async()=>{
    localStorage.clear();
    const user=userEvent.setup();
    render(<App/>);await user.click(screen.getByRole('link',{name:'History'}));
    await user.click(screen.getByRole('button',{name:'Log Workout'}));
    expect(screen.getByText(/Push-ups/)).toBeInTheDocument()}
);
