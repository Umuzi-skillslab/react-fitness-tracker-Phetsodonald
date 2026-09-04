import {render,screen} from '@testing-library/react';
import HistoryPage from './HistoryPage';
import { MemoryRouter } from "react-router-dom";

describe("HistoryPage", () => {
    const exercise={id:1,name:'Push-ups'};

    test('should show empty history',()=>{
        render(<MemoryRouter><HistoryPage history={[]} exercises={[exercise]} onLog={jest.fn()} onDelete={jest.fn()}/></MemoryRouter>);
        expect(screen.getByText('No workouts logged yet.')).toBeInTheDocument()}
    );
})

