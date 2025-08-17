
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('ite-exam-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './icons/icon-192x192.png',
        './icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
