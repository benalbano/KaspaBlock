// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KaspaBlock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KaspaBlock/i);
    expect(titleElement).toBeInTheDocument();
});
