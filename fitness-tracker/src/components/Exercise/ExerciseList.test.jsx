import {render,screen} from '@testing-library/react';
import ExerciseList from './ExerciseList';

const e={
    id:1,
    name:'Push-ups',
    category:'strength',
    muscleGroups:['chest'],
    difficulty:'beginner',
    duration:10,
    sets:3,
    reps:15
};

describe("ExerciseList", () => {
    const props={onSelect:jest.fn()};

    test('should show loading',()=>{
        render(<ExerciseList exercises={[]} isLoading {...props}/>);
        expect(screen.getByText('Loading exercises...')).toBeInTheDocument()}
    );
        
    test('should show empty state',()=>{
        render(<ExerciseList exercises={[]} {...props}/>);
        expect(screen.getByText('No exercises found')).toBeInTheDocument()}
    );
            
    test('should show error',()=>{
        render(<ExerciseList exercises={[]} error="Failed" {...props}/>);
        expect(screen.getByRole('alert')).toHaveTextContent('Failed')}
    );

    test('should render exercises',()=>{
        render(<ExerciseList exercises={[e]} {...props}/>);
        expect(screen.getByText('Push-ups')).toBeInTheDocument()}
    );
})