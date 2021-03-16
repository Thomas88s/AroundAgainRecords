import { render, screen } from '@testing-library/react';
import RecordApp from './RecordApp';

test('renders learn react link', () => {
  render(<RecordApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
