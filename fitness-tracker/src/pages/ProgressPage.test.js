import {render,screen} from '@testing-library/react';
import ProgressPage from './ProgressPage';
import { MemoryRouter } from 'react-router';

describe("ProgressPage", () => {
    test('should show progress statistics',()=>{
        render(<MemoryRouter><ProgressPage history={[{id:1,date:'2026-08-31',sets:3,reps:10,weight:5,exerciseName:'Push-ups'}]} workoutPlan={{monday:[{id:1,caloriesBurn:50}],tuesday:[]}}/></MemoryRouter>);
        expect(screen.getByText('Workouts')).toBeInTheDocument();
        expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(1)}
    );
});