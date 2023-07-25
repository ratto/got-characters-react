import { render, screen } from '@testing-library/react';
import { App } from './index.tsx';

describe('<App />', () => {
  it('should render learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
