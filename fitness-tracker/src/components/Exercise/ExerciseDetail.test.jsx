import { render, screen, fireEvent } from "@testing-library/react";
import ExerciseDetail from "./ExerciseDetail";

const exercise={ 
    id:1,name:'Push-ups',
    category:'strength',
    muscleGroups:['chest'],
    difficulty:'beginner',
    duration:10,sets:3,
    reps:15,equipment:'none',
    instructions:['Start','Lower','Push'],
    videoUrl:'test.mp4'
};

describe("ExerciseDetails", () => {
    test('should render details and video',()=>{
        render(<ExerciseDetail exercise={exercise} onBack={jest.fn()} onAdd={jest.fn()}/>);
        expect(screen.getByText('Push-ups')).toBeInTheDocument();
        expect(screen.getByRole('heading',{name:/demonstration/})).toBeInTheDocument()}
    );
        
    test('should check that both back and add callbacks work',()=>{
        const back=jest.fn(),add=jest.fn();
        render(<ExerciseDetail exercise={exercise} onBack={back} onAdd={add}/>);
        fireEvent.click(screen.getByRole('button',{name:'Back to Exercises'}));
        fireEvent.click(screen.getByRole('button',{name:'Add to Workout'}));
        expect(back).toHaveBeenCalled();
        expect(add).toHaveBeenCalledWith(exercise)}
    );
})