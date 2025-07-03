import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.tsx';
import GlobalStyles from './styles/GlobalStyles.ts'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles /> 
    <App />
  </React.StrictMode>
);

reportWebVitals();