importScripts("/tetris/precache-manifest.0f808fdb49178fa0ad083dd190ef243d.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute(self.__precacheManifest);
}
else {
  console.log(`Workbox didn't load`);
}

