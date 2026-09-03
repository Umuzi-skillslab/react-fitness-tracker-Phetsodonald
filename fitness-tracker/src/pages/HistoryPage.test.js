import {render,screen} from '@testing-library/react';
import HistoryPage from './HistoryPage';

describe("HistoryPage", () => {
    const exercise={id:1,name:'Push-ups'};

    test('should show empty history',()=>{
        render(<HistoryPage history={[]} exercises={[exercise]} onLog={jest.fn()} onDelete={jest.fn()}/>);
        expect(screen.getByText('No workouts logged yet.')).toBeInTheDocument()}
    );
})

