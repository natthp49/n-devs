  
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/icon/home-icon.png',
          '/static/js/2.0632ad17.chunk.js',
          '/static/js/2.0632ad17.chunk.js.map',
          '/static/js/main.9f0abbe2.chunk.js',
          '/static/js/main.9f0abbe2.chunk.js.map',
          '/static/js/runtime-main.8b893867.js',
          '/static/js/runtime-main.8b893867.js.map',
          '/static/media/img.c2e5695b.png',
          '/js/analytics.js',
          '/js/demo-bar.js',
          '/js/index.js',
          '/js/min.scripts.js',
          '/js/scripts.js'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });