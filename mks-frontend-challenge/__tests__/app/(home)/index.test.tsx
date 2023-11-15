import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/(home)/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const HomeTest = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

test('Home component renders products', async () => {
  render(<HomeTest />);
  const products = await screen.findAllByRole('article');
  expect(products.length).toBeGreaterThanOrEqual(1); // Adjust this number based on your actual data
});