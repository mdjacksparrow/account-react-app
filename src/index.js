import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(
      function (registration) {
        // Registration was successful
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
} else {
  // Uninstall when developement mode
  console.log('service worker uninstalled for development...');

  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
