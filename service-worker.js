const CACHE_NAME = 'my-money-v1';
const urlsToCache = [
  './',
  './page1.html',
  './page2.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.29/jspdf-autotable.min.js',
  'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
