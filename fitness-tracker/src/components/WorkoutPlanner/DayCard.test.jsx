import {render,screen,fireEvent} from '@testing-library/react';
import DayCard from './DayCard';

describe("DayCard", () => {
    test('should render day and exercise',()=>{
        render(<DayCard day="Monday" exercises={[{id:1,name:'Push-ups'}]} onRemove={jest.fn()} onClear={jest.fn()}/>);
        expect(screen.getByText('Monday')).toBeInTheDocument();
        expect(screen.getByText('Push-ups')).toBeInTheDocument()}
    );

    test('should remove callback gets day and id',()=>{
        const fn=jest.fn();
        render(<DayCard day="Monday" exercises={[{id:1,name:'Push-ups'}]} onRemove={fn} onClear={jest.fn()}/>);
        fireEvent.click(screen.getByRole('button',{name:'Remove'}));
        expect(fn).toHaveBeenCalledWith('Monday',1)}
    );

    test('empty state appears',()=>{
        render(<DayCard day="Sunday" exercises={[]} onRemove={jest.fn()} onClear={jest.fn()}/>);
        expect(screen.getByText('No exercises planned')).toBeInTheDocument()}
    );
})
