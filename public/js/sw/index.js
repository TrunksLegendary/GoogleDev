self.addEventListener('fetch', function(event) {
  // TODO: Respond to all requests with a HTML resopnse
  // containing an element with a class="a-winnter-is-me".
  // Ensure the Content-Type of the response id "text/html"
  event.respondWith(
    new Response('Hello <b class="a-winner-is-me">world</b>',{
      headers: {'Content-Type': 'text/html'}
    })
  );
});
