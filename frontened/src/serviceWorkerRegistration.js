// src/serviceWorkerRegistration.js

export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/custom-sw.js')
          .then(reg => {
            console.log('🛰️ Service Worker registered:', reg);
          })
          .catch(err => {
            console.error('Service Worker registration failed:', err);
          });
      });
    }
  }
  