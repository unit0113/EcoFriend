import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '@/app/login/page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ replace: jest.fn() }),
}));

describe('Page Component', () => {
  test('renders without crashing', () => {
    render(<Page />);
    expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
  });
  
  test('submits the form correctly', async () => {
    render(<Page />);

    // Fill in form fields
    userEvent.type(screen.getByLabelText(/email address/i), 'test@example.com');
    userEvent.type(screen.getByLabelText(/password/i), 'password');

    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    // Expect that the handleSubmit function is called
    expect(screen.getByText('Invalid login information')).toBeInTheDocument();
  });
});
