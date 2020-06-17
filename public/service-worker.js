var CACHE_NAME = 'accouny-app-v1';
var urlsToCache = [
  '/',
  '/asset/',
  '/static/css/',
  '/images/',
  '/static/js/',
  '/manifest.json',
  '/precache-manifest.7dea9ff4d40abf12eab81b2cc4037859.js',
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
