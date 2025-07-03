import { createRoot } from 'react-dom/client'

import './assets/stylesheets/config/_reset.scss'
import App from './App';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client ={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
