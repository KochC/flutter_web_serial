'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "447d18a96468dadf056ed8ca8fcbf08e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "d000ac6d6e3e3160278f77117f50ae31",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "d666aa1b306771805f23e224a26b85c8",
"/": "d666aa1b306771805f23e224a26b85c8",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/FontManifest.json": "0d1510fc370b4c0cb886fc58769d13e6",
"assets/packages/liquid_flutter/assets/warning.json": "0db8dce50062e4d302af0f9732f9404c",
"assets/packages/liquid_flutter/assets/upload.json": "961a71a350733ff9c3f51648309a7c24",
"assets/packages/liquid_flutter/assets/trash.json": "d1fdd780e706d2cc629b876f4c125d25",
"assets/packages/liquid_flutter/assets/eye.json": "777cf845e3f7477c7910fe6043f30e06",
"assets/packages/liquid_flutter/assets/search.json": "57db5b998ba0f90c1b2e9d02389ad747",
"assets/packages/liquid_flutter/assets/notification.json": "16d9fc02302ce681ba235646b3c69501",
"assets/packages/liquid_flutter/assets/burger-cross.json": "294610db15762d0c1e4af4e00330580f",
"assets/packages/liquid_flutter/assets/test_tube.json": "dbebca46f471f3dcba35b71c3b358d3b",
"assets/packages/liquid_flutter/assets/notification_number.json": "ce44cc8614b8f3bd0c9d19ed6ff7b6a2",
"assets/packages/liquid_flutter/assets/comment.json": "39a58e723bc90feff27f4e50eff3da4a",
"assets/packages/liquid_flutter/assets/export.json": "e3918a9ebc4641e1b5a4901bce5fbc24",
"assets/packages/liquid_flutter/assets/mute.json": "e2f8dc12a3ef35faca9089b28d7061dd",
"assets/packages/liquid_flutter/assets/refresh.json": "374cfd1e50ef94bbb4ff02b1877456e0",
"assets/packages/liquid_flutter/assets/download.json": "2ee8fd2bdc83352f76df5265ee0bfd9d",
"assets/packages/liquid_flutter/assets/play.json": "43770edbcb895b131b7e1951ac79f0f5",
"assets/packages/liquid_flutter/fonts/LiquidIcons.ttf": "d25d1f16f02fd7161174c20fc29bc189",
"assets/packages/liquid_flutter/fonts/Merck.ttf": "f0a78c06cd939de7128d8779759bb5d8",
"assets/packages/liquid_flutter/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/packages/liquid_flutter/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/urp_core/lib/assets/reader_yellow.png": "7d401eda3195376b0368d8b408d12dd8",
"assets/packages/urp_core/lib/assets/reader_button.png": "5c260c1efe49687cddfcc36dac5836aa",
"assets/packages/urp_core/lib/assets/reader_red.png": "e5a4308fd35943d23f340948dae7f67c",
"assets/packages/urp_core/lib/assets/pchip_reader_yellow.png": "a980476a4934bba01f91094c5c009b20",
"assets/packages/urp_core/lib/assets/reader.png": "6df6ad1da55168d1a4c7a5f3c499b22d",
"assets/packages/urp_core/lib/assets/pchip_reader_idle.png": "f93418659098c49e6955a55ddf23eb6d",
"assets/packages/urp_core/lib/assets/reader_green.png": "bf003730e188d76aa546a70f355ea814",
"assets/packages/urp_core/lib/assets/pchip_reader_green.png": "57541766d28dee1661bdc69eda14a815",
"assets/packages/urp_core/lib/assets/pchip_reader_button.png": "be0569648393ead99cf3b8fb1ee1486e",
"assets/packages/urp_core/lib/assets/reader_blue.png": "83b3a5cf99012614a6affb25e001d15a",
"assets/packages/urp_core/lib/assets/reader_scanning.png": "b1402320b7706a3e041a0645bde5cbae",
"assets/packages/urp_core/lib/assets/reader_idle.png": "1907c2ac19e4fcfa07ad9125ffdb98fc",
"assets/packages/urp_core/lib/assets/pchip_reader_red.png": "cebce054c126a6b4dd7b4ff06dc54eb6",
"assets/packages/urp_core/lib/assets/pchip_reader_blue.png": "0a915ddf1d89a250dc39a63d1e4ffcdd",
"assets/NOTICES": "f517ec4fdb4148cca6a8f8dd5b1dcf9a",
"assets/AssetManifest.json": "fc3d7611e2e5d2b2c4df46d9f66cf5d0",
"assets/AssetManifest.bin.json": "85bf7c88239120d7023ffbe39f44fa8e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/securalic_reader.png": "0b15dac9a4c08c1b2c7191b29c1d9c59",
"assets/assets/pchip_reader.png": "d77537f09db2efc7bc8d9c8fbcf869b0",
"assets/assets/unknown_reader.png": "07db291400cfebb83da4b31dbe42779c",
"assets/AssetManifest.bin": "a047b4c41cf9c763c2849a3e1a9900f9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"main.dart.js": "17e7fbe8d0b9c6c704744f39e355de8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
