importScripts("/precache-manifest.5e6ef0dae6725bb047bf17b1f00464bc.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */

if (workbox) {
  self.skipWaiting();
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/trips',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'atams-cache',
    })
  );
  workbox.routing.registerRoute(
    new RegExp('/img/icons/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'atams-image-cache',
    })
  );
  workbox.routing.registerRoute(
    new RegExp('/img/.*.png'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'atams-image-cache',
    })
  );
} else {
  console.log(`Workbox didn't load`);
}

