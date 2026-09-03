import {render,screen,waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ExercisesPage from './ExercisesPage';

describe("ExercisesPage", () => {
    test('should load exercises asynchronously',async()=>{
        render(<MemoryRouter><ExercisesPage workoutPlan={{}} onAdd={jest.fn()}/></MemoryRouter>);
        expect(screen.getByText('Loading exercises...')).toBeInTheDocument();
        await waitFor(()=>expect(screen.getByText('Push-ups')).toBeInTheDocument())}
    );
})

