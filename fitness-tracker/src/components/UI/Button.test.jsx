import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  test('renders the button', () => {
    render(<Button>Start Workout</Button>);

    expect(
      screen.getByRole('button', { name: /start workout/i })
    ).toBeInTheDocument();
  });

  test('calls the click handler', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick}>
        Start Workout
      </Button>
    );

    await user.click(
      screen.getByRole('button', { name: /start workout/i })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});