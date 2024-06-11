import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TurnKeyProvider } from './provider/TurnKeyProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TurnKeyProvider>
      <App />
    </TurnKeyProvider>
  </React.StrictMode>
);
