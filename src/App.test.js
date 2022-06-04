import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

.home_area {
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 100px;
}