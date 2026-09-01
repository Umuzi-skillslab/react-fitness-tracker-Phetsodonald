import {render,screen,fireEvent} from '@testing-library/react';
import ExerciseCard from './ExerciseCard';

const exercise={
    id:1,name:'Push-ups',category:'strength',muscleGroups:['chest'],difficulty:'beginner',duration:10,sets:3,reps:15
};

describe('ExerciseCard',()=>{
    test('renders name and difficulty',()=>{
        render(<ExerciseCard exercise={exercise} onSelect={jest.fn()}/>);
        expect(screen.getByText('Push-ups')).toBeInTheDocument();
        expect(screen.getByText('beginner')).toBeInTheDocument()}
    );

    test('select callback receives id',()=>{
        const fn=jest.fn();
        render(<ExerciseCard exercise={exercise} onSelect={fn}/>);
        fireEvent.click(screen.getByRole('button',{name:'View'}));
        expect(fn).toHaveBeenCalledWith(1)}
    );
    
    test('shows in plan state',()=>{
        render(<ExerciseCard exercise={exercise} onSelect={jest.fn()} isInPlan/>);
        expect(screen.getByRole('button',{name:'In Plan'})).toBeDisabled()})}
    );
