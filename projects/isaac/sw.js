self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/projects/isaac/',
      '/projects/isaac/scripts/pwa.js',
      '/projects/isaac/index.html',
      '/projects/isaac/min/min.js',
      '/projects/isaac/min/min.css',
      '/projects/isaac/images/so-white.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
