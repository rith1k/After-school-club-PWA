var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'lessons.js',
    'afterschool.webmanifest',
    'images/biology.jpg',
    'images/cart.jpg',
    'images/chemistry (Custom).png',
    'images/chemistry.jpg',
    'images/computer science.jpg',
    'images/english (Custom).png',
    'images/english.jpg',
    'images/french (Custom).png',
    'images/french.jpg',
    'images/geography (Custom).png',
    'images/geography.bak.jpg',
    'images/geography.jpg',
    'images/history (Custom).png',
    'images/history.jpg',
    'images/japanese.jpg',
    'images/logo.png',
    'images/math.jpg',
    'images/physics (Custom).png',
    'images/physics.jpg',
    'images/Psychology (Custom).png',
    'images/Psychology.jpg',
    'images/science.jpg',
    'images/spanish (Custom).png',
    'images/spanish.jpg',
    'css/cart.css',
    'css/homePage-css.css'


];
self.addEventListener('install', (e) => {
    console.log('Service worker running');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] caching all files');
            return cache.addAll(cacheFiles);
        })
    )
});
self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request).then(function(r) { // Download the file if it is not in the cache, 
        return r || fetch(e.request).then(function(response) { // add the new file to cache
            return caches.open(cacheName).then(function(cache) {
                cache.put(e.request, response.clone());
                return response;
            });
        });
    }));
});