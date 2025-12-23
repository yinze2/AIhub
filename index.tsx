
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("AI Hub: Application initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("AI Hub: Root element not found!");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("AI Hub: Render triggered successfully.");
} catch (err) {
  console.error("AI Hub: Render failed:", err);
}
