'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "89de63356103edd6459083c07777bf94",
"index.html": "42964186cbcf44d8b50fbc9d9205ee93",
"/": "42964186cbcf44d8b50fbc9d9205ee93",
"main.dart.js": "590a8297cff7518beeddae0af043dd53",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "3c37efa2bf5a1d76f78c8c2189fdfbfc",
"icons/Icon-192.png": "f0bd5f07b8ae2e0915aa215fbf8818d6",
"icons/Icon-maskable-192.png": "f0bd5f07b8ae2e0915aa215fbf8818d6",
"icons/Icon-maskable-512.png": "78b0b99e1b0077e2ae1b8b6cc0220008",
"icons/Icon-512.png": "78b0b99e1b0077e2ae1b8b6cc0220008",
"manifest.json": "8832353b1dc42ac7a0111ae5232a7985",
"assets/AssetManifest.json": "09d3518b15731a09220620908d7d7a3a",
"assets/NOTICES": "cf716500af804e3359c37edd09d2c9ea",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/AssetManifest.bin.json": "9799094ea1661ff9f82b2a6bc0f8b9bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "be77423a7137b72486d3e847a4e36d97",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "60dc031753d04c314ea88a0d2283133b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8cefde7f2b25e07383a0e54fb83640bf",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "aa93b31ecb46d7928d7858fef2161810",
"assets/fonts/MaterialIcons-Regular.otf": "8a4888a660fcaeeed22500f1c7134be9",
"assets/assets/images/me.png": "739a26b145b7957f33498aa29e3c85dc",
"assets/assets/images/UC-d8bb7f28-d2cc-4627-bb75-b079c51075d7.jpg": "94bcba44c326327ca6c9d80ba3c3ab35",
"assets/assets/images/databasefundamentals.png": "84d0ceefcac50db084ef454588db9f6e",
"assets/assets/images/appstore.svg": "d0558d91063038236b60e3ef71fdc1fd",
"assets/assets/images/UC-002a45e0-88c2-473e-a673-a6f279dacecc.jpg": "aa8885eb60402e656f5ac4d2f9277e99",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/UC-1808fa83-c19e-4930-bc4a-753115fea80d.jpg": "08de4b0b0c2aa5e8686ea708550c9c40",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/UC-089b15e9-993a-4a50-b2b5-87d2256fb945.jpg": "18bf30a0e5e0d0652eaa110ab5173467",
"assets/assets/images/UC-79e10fe3-6c64-4fb7-9741-421dcda154b7.jpg": "0e7a8ae12cabdc3bafbcd0b5735fb4ae",
"assets/assets/images/projects/shipper_driver/4.png": "76fcfcc49866627cf1d20b191c99bf9f",
"assets/assets/images/projects/shipper_driver/5.png": "dfc1e791606a859868ff599c0661745a",
"assets/assets/images/projects/shipper_driver/2.png": "5153297a1c0391120f82f36dc31be343",
"assets/assets/images/projects/shipper_driver/3.png": "996baec953dc92d7db981fa37454c069",
"assets/assets/images/projects/shipper_driver/1.png": "b03d919235b08fee23a026efdb97afa6",
"assets/assets/images/projects/shipper/4.png": "0c56d7b2c4f72c1c96652772eb630459",
"assets/assets/images/projects/shipper/5.png": "8b8442405bbda3e45201a8a63ed0969d",
"assets/assets/images/projects/shipper/2.png": "443b9565e967e19d2205d88321d0cb9b",
"assets/assets/images/projects/shipper/3.png": "6df07d130edc34781f8339b8e0493a44",
"assets/assets/images/projects/shipper/1.png": "95008302e6e80929382d725f1c4f4ae1",
"assets/assets/images/projects/tabibi/1.jpeg": "b89fb85d4f910a788cf9b1d2c5d6656a",
"assets/assets/images/projects/tabibi/6.jpeg": "3249c62efcc845086faae0b41b86aa69",
"assets/assets/images/projects/tabibi/4.jpeg": "40cafb58b0d2ff340c35430ffa5b94a8",
"assets/assets/images/projects/tabibi/5.jpeg": "782948ad88848e11541003f9fc8773c9",
"assets/assets/images/projects/tabibi/2.jpeg": "b1d857cf6a2f57d21bd2fa64beb5f2ed",
"assets/assets/images/projects/tabibi/3.jpeg": "6e073709c00bca7218efa1584e2d6060",
"assets/assets/images/projects/tabibi_doctors/1.jpeg": "c38960bad12bdcec42fd0a4bc9b70757",
"assets/assets/images/projects/tabibi_doctors/4.jpeg": "3b3bf3bb9df22d58ea1b7185c8059012",
"assets/assets/images/projects/tabibi_doctors/5.jpeg": "3aaf1ae0c2c1c600d78640e0963e221d",
"assets/assets/images/projects/tabibi_doctors/2.jpeg": "947da98f2fead560f1b43e9935cf726c",
"assets/assets/images/projects/tabibi_doctors/3.jpeg": "a9778dbfae84df13835a0f06ca839688",
"assets/assets/images/projects/disneyplus/11.png": "326113703663396ec8f9102c396ab8ca",
"assets/assets/images/projects/disneyplus/mockups.png": "3ec654e282e7dc41264a06d46d9980fa",
"assets/assets/images/projects/disneyplus/4.png": "41bb2d5b758d1b81711e97a466418508",
"assets/assets/images/projects/disneyplus/2.png": "e50912a991b7efc2042d0a63e835d3d5",
"assets/assets/images/projects/disneyplus/3.png": "2aed1b561a1d71ac1bfe77da08c82d67",
"assets/assets/images/projects/disneyplus/1.png": "d48c9918bf36c666d08806edb6324daa",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/UC-9cd09284-6cda-4064-8d3d-d9cf7b49a0cc.jpg": "6dd9b768a0c0b74fa4f2a16d7415ed93",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/Software%2520Engineer%2520-%2520Flutter%2520Developer.pdf": "91a2dc4b083f2f2c5ec0b2ee3fbf7667",
"assets/assets/images/logo.png": "d7e64cb13ec1f9753af22d0046142c54",
"assets/assets/images/UC-5bdbab44-d31a-4317-a189-88e0e2d500fb.jpg": "8ff34244a246cf831d118eaa48a75d61",
"assets/assets/images/playstore.svg": "17615144cc51f86b469385d0a302141f",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
