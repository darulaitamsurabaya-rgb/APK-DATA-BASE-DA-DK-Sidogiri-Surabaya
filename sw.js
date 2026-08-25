const CACHE_NAME = 'e-pesantren-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logoapk.png'
];

// Menginstal Service Worker dan menyimpan file ke cache (penyimpanan lokal)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Mengambil data dari internet, jika offline akan mengambil dari cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
