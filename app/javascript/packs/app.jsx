import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <h1>Hello World</h1>
);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
});