import { createRoot } from 'react-dom/client'

import './assets/stylesheets/config/_reset.scss'
import App from './App';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from './Components/Util/Toast';
import AuthController from './Components/Util/AuthController';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
          <App />
      </ToastProvider>
    </QueryClientProvider>
  </StrictMode>
)
