import React from 'react';
import { render } from '@testing-library/react';
import RouterComponent from './RouterComponent';

test('renders learn react link', () => {
  const { getByText } = render(<RouterComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
