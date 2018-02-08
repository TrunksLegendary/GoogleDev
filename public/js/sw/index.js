self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('wittr-static-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png'
      ]);
    })
  );
});  
