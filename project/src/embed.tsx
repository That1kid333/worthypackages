import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Function to embed the app
function embedWorthyPackages(targetElement: string | HTMLElement) {
  const container = typeof targetElement === 'string' 
    ? document.querySelector(targetElement) 
    : targetElement;

  if (!container) {
    console.error('Target element not found');
    return;
  }

  // Create a wrapper div to isolate styles
  const wrapper = document.createElement('div');
  wrapper.className = 'worthy-packages-embed';
  container.appendChild(wrapper);

  // Mount React app
  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Return cleanup function
  return () => {
    root.unmount();
    wrapper.remove();
  };
}

// Make it available globally
declare global {
  interface Window {
    embedWorthyPackages: typeof embedWorthyPackages;
  }
}
window.embedWorthyPackages = embedWorthyPackages;

export default embedWorthyPackages;
