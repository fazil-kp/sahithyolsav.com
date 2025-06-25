'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c4c29a4d6e7c46080c44fe2c3aabc012",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "af3b91442eb7a4d9d19be5cced6358e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4651020758b192e56d9ad7aa1bf0e7eb",
".git/logs/refs/heads/main": "f14ac3143434502378a80055658f4e7f",
".git/logs/refs/remotes/origin/main": "9e4abcdea13a861d3f50edaacc8b6f8b",
".git/objects/0a/c96966b267476ab143b4b27e6f816405584c5a": "8b72f29d767e281a846a45287eb8abfc",
".git/objects/0b/14ec7daffadc22932712a314bfc0ffb6dc9097": "6959aeb3972499f2be4310857ad9e90d",
".git/objects/0c/3aaa61c56fc0086e9cc979e16e6bea72f693bf": "fe02ae192f9083bfef14574a2e74217f",
".git/objects/0c/60dd566e8210fbbc0a437de75eab30a2d840d9": "8997600dc898373fd7690f9029960d10",
".git/objects/16/631e7c8ae2dc05e4dbda40be1865841ffe5ef9": "181db49517612a95205d02ed99805ea7",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/24/22cd50319ee3ef2995a929f63d7d1da39b8d69": "68f7160c8053f4e6a4fb62c983857120",
".git/objects/32/ac612ae882d90fb858b9f3b44602a08a3d6a85": "8147cd606ffecef3d0a8170b441cead6",
".git/objects/3d/6ca0b91b792eacaf2f21d6e33e1ecfed4744a3": "b696b495c7ef8f82160fc592ff307964",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/1ac981084b6c3df975db372fdb3132bab198ed": "28461f513e0e75656a85948511803cfc",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/61/1afd81ded1b504ac536c7a55620a38c695a2e1": "1a208c6eee0fd820503399e39e2b9f76",
".git/objects/68/996ce40ad38c610eece1bb12ebef3714d5f802": "5cd544774e05ad4b85f5d5d9f15dc8cd",
".git/objects/6c/0995ac50378cf8c2341366576220f2ccfaa3fe": "cd1ed2c31f6246fcb374d296abd02d03",
".git/objects/6c/e07d794e517b869e3acb65119bdbed4d50f51c": "77e6cd64c6d381ef6054633e78a65b21",
".git/objects/6f/c6995ee8f0d8af3bb44d314ea5938eff9b2c9e": "a392edcf6790d0e842735940a5172cdd",
".git/objects/6f/d53930e70aa425131e57372b6d5a6de124d2e9": "e8f1bf4722010332bb6df4f23d64be29",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/c5975196dd653608898f6cb15bd2c4e2b17e0e": "9fb47669d32d5b58405eb01beb466ed8",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/80/1dafed2ba908b7032f2dc03d0930823866a439": "c6966b51b75f0697470bb2c39d5b37c6",
".git/objects/85/13301482044a7ebbc2839450d670d1c5dff94e": "24bd59fb26327fcf262b5e01ef215908",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a2/a43b8201d2286526a44e3876a6d6b0931e3af5": "527c4c8e801eee80ed7f695b84a10fcf",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/a6175dd7bd74eb3a5e16993f07fdc4c43421ae": "11a07436e77b8618869d4f7815c028ad",
".git/objects/af/79fa29ae1cccba2191bef84d4002217299b623": "55421349491d52fec85eaa629a1517df",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/b5/625ef764308f9ae98f35c0e32f49af13200af5": "c80c6a08e475ef3fee35d7d0fb4c38bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/34493415f096d9fa1eff0cf168e041a45d9d51": "0be92df016c4886bba711f013af41cb8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/abc118a4b03c688f722128c98e5ccef697821a": "da6ba0f58d74fc639594263af92b808b",
".git/objects/be/2019e99c0385ef59a7d650c4bfba4ef52137a1": "0702b9626d126eb9696bb63bdb842ad8",
".git/objects/be/499487ea8540e74aac071fde891002d315078b": "e178909b9e758da73926d8396542db75",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/cd/630fc5dc4c2bb7a994570fb2664c6fdac6391b": "e8dc1d1ac8f73f687472170f14a4dc19",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/9d4f7d02d325e6b64b1df8aca643950c1fbda4": "43767b2b2bf65bf114ba4a3f4b52f2dd",
".git/objects/e2/58e53aff5b9d24a9b474c69ca7fe50444eb9a3": "0443d0d5c4a231d44c91d7e4ca3903a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/37d64acde1d970c9cd2e18e318341a402d31a3": "95d82ae7399ee8513aa29c1702abd97c",
".git/objects/f6/245d1f2e52ba02f97f4c0cff70f3b71d1d2d9f": "7dd080d4dde095c0a3a112acedb579b0",
".git/objects/f8/70ae5f2cfc549f507273a23980609fb9e03993": "dc367881e1bccb05728563a59d6a23c5",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/refs/heads/main": "8cc85ab3e979f255c308a90f22682911",
".git/refs/remotes/origin/main": "8cc85ab3e979f255c308a90f22682911",
"assets/AssetManifest.bin": "7a43d23895bbe3526497cc1009b94ffb",
"assets/AssetManifest.bin.json": "91071d2b45e26993cb27c219bd02ef12",
"assets/AssetManifest.json": "504112c9a1d1f7f6d65c91b909de0826",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/icons/home_fill.svg": "601fef6a637591cb749478fc1ca51d18",
"assets/assets/icons/home_light.svg": "b2e18b353a3405030c1e87b4b1c76d9d",
"assets/assets/icons/meal_fill.svg": "a71ff65ea4c458443c1c3d969ecb0fd3",
"assets/assets/icons/meal_light.svg": "04ab7982d13b37d645cdd70fdc4b3efe",
"assets/assets/icons/progress_fill.svg": "7d72e049ead298245fc481312598cea3",
"assets/assets/icons/progress_light.svg": "758a64b410503e14fe3236452e98aa97",
"assets/assets/images/image1.jpg": "487265a3b68a78e42e99cd6d2511690c",
"assets/assets/images/image2.jpg": "0bc0e93d92bff89af68aee52c83ece93",
"assets/assets/images/logo.jpg": "09cade03e8655d5cbcb456683bc8e139",
"assets/assets/images/rule1.jpg": "b1da07612d1930d26da20189b486e250",
"assets/assets/images/rule2.jpg": "5253b9475d6a2f9b466c8fdf734ce48f",
"assets/assets/images/rule3.jpg": "e764365396ff474136372efb089ee197",
"assets/assets/images/splash.png": "d677bdf08b5ac0807675f46fd06d0b87",
"assets/FontManifest.json": "b829150d82be8a43ba32803cea234afe",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d3f3fc09f11ad3b9719cd34569205dbb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "cebf889dfc0c0879da0cb62903b0c4d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2c69935a0e1b912393187fa08d33adc",
"/": "d2c69935a0e1b912393187fa08d33adc",
"main.dart.js": "e237646be810e6018951fc39d1a4447a",
"manifest.json": "2e35d8849f748e90c98cee41c27149fc",
"version.json": "d98ba93e2a475f6fc0f0b9d07709f9d3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
