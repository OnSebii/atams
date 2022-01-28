importScripts('/precache-manifest.7d4b541078272826df300d21f3f95481.js', 'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

/* global workbox */

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
} else {
  console.log(`Workbox didn't load`);
}
