import { render, screen } from '@testing-library/react';
import App from './App';
import SocialNetworkApp from "./App";
import React from "react";

test('renders learn react link', () => {
  render(<SocialNetworkApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
