// public/custom-sw.js

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js'
  );
  
  if (workbox) {
    console.log('✅ Workbox is loaded');
  
    // Precache everything in __WB_MANIFEST (needed only if using precache)
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
  
    // Example: Use Network First strategy for HTML pages
    workbox.routing.registerRoute(
      ({ request }) => request.mode === 'navigate',
      new workbox.strategies.NetworkFirst()
    );
  } else {
    console.log('❌ Workbox failed to load');
  }
  