import {render,screen} from '@testing-library/react';
import ProgressPage from './ProgressPage';

describe("ProgressPage", () => {
    test('should show progress statistics',()=>{
        render(<ProgressPage history={[{id:1,date:'2026-08-31',sets:3,reps:10,weight:5,exerciseName:'Push-ups'}]} workoutPlan={{monday:[{id:1,caloriesBurn:50}],tuesday:[]}}/>);
        expect(screen.getByText('Workouts')).toBeInTheDocument();
        expect(screen.getAllByText('1').length).toBeGreaterThanOrEqual(1)}
    );
});