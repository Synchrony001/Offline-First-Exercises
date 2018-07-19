// fetch event listener

self.addEventListener('fetch', function(event) {
	console.log(event.request);
  event.respondWith(
    fetch('/offline.html')
  )
});