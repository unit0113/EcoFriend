// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Page from '@/app/login/page';
// import { PageWithSessionProvider } from '@/app/login/page';
// import { act } from 'react-dom/test-utils'; // import act for async rendering


// jest.mock('next/navigation', () => ({
//   useRouter: () => ({ replace: jest.fn() }),
// }));

// // describe('Page Component', () => {
// //   test('renders without crashing', () => {
// //     render(<Page />);
// //     expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
// //   });

// describe('Page Component', () => {
//   test('renders without crashing', () => {
//     render(<PageWithSessionProvider />);
//     // Add more specific assertions if needed
//     expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
//   });

//   test('renders without crashing', async () => {
//     await act(async () => {
//       render(<Page />);
//     });
//   });
  

//   // test('submits the form correctly', async () => {
//   //   render(<Page />);

//   //   // Fill in form fields
//   //   userEvent.type(screen.getByLabelText(/email address/i), 'test@example.com');
//   //   userEvent.type(screen.getByLabelText(/password/i), 'password');

//   //   // Simulate form submission
//   //   fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

//   //   // Expect that the handleSubmit function is called
//   //   // You may need to adjust this based on the actual behavior of your component
//   //   // For example, if the login is successful, it would redirect, so you might want to check for that
//   //   expect(screen.getByText('Invalid login information')).toBeInTheDocument();
//   // });
// });
