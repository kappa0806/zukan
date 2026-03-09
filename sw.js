const CACHE_NAME = 'zukan-pwa-v13';

// 自身のファイル
const APP_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// ikimono の画像（メイン画像）
const IMAGES = [
  'dog','cat','rabbit','bear','elephant','lion','monkey','giraffe','pig','cow',
  'horse','sheep','chicken','fox','panda','penguin','crab','koala','gorilla',
  'hippo','tiger','deer','raccoon','wolf','camel','kangaroo','hamster','squirrel',
  'owl','parrot','flamingo','swan','rhino','zebra',
  'snake',
  'butterfly','caterpillar','ladybug','ant','grasshopper','beetle','bee','snail',
  'dragonfly','cicada','firefly','stagbeetle','mantis','spider','cricket','pillbug',
  'fish','tropicalfish','pufferfish','shark','octopus','squid','shrimp','whale',
  'dolphin','turtle','frog','jellyfish','seahorse','starfish','seal','otter',
  'ray','seaurchin'
].map(name => `./images/${name}.jpg`);

// 品種画像
const VARIETY_IMAGES = [
  'shiba_inu','golden_retriever','poodle','chihuahua','dachshund',
  'american_shorthair','persian_cat','scottish_fold','siamese_cat','munchkin_cat',
  'brown_bear','polar_bear','asian_black_bear','sun_bear',
  'african_lion','white_lion','asiatic_lion',
  'african_elephant','asian_elephant','forest_elephant',
  'masai_giraffe','reticulated_giraffe','northern_giraffe',
  'japanese_macaque','chimpanzee','orangutan','gibbon',
  'red_fox','arctic_fox','fennec_fox',
  'holland_lop','netherland_dwarf','lionhead_rabbit',
  'bengal_tiger','siberian_tiger','white_tiger',
  'great_white_shark','whale_shark','hammerhead_shark',
  'blue_whale','humpback_whale','sperm_whale',
  'bottlenose_dolphin','orca','pacific_dolphin',
  'emperor_penguin','adelie_penguin','rockhopper_penguin',
  'hercules_beetle','caucasus_beetle','japanese_beetle',
  'giant_stag_beetle','giraffe_stag_beetle','rainbow_stag_beetle',
  'cabbage_white','swallowtail','monarch',
  'common_octopus','flapjack_octopus','blue_ringed_octopus',
  'miniature_pig','berkshire_pig','wild_boar',
  'holstein_cow','jersey_cow','wagyu_cow',
  'thoroughbred','pony','clydesdale',
  'merino_sheep','suffolk_sheep','bighorn_sheep',
  'nagoya_cochin','silkie_chicken','rooster',
  'giant_panda','qinling_panda',
  'king_crab','snow_crab','fiddler_crab',
  'queensland_koala','victoria_koala','nsw_koala',
  'western_gorilla','mountain_gorilla','silverback',
  'hippo','pygmy_hippo',
  'japanese_deer','reindeer','moose',
  'japanese_tanuki','ezo_tanuki','continental_tanuki',
  'gray_wolf','arctic_wolf','red_wolf',
  'dromedary','bactrian_camel',
  'red_kangaroo','wallaby','tree_kangaroo',
  'golden_hamster','dwarf_hamster','roborovski',
  'japanese_squirrel','chipmunk','flying_squirrel',
  'barn_owl','snowy_owl','eagle_owl',
  'budgerigar','cockatiel','macaw',
  'white_rhino','black_rhino','indian_rhino',
  'plains_zebra','grevys_zebra','mountain_zebra',
  'king_cobra','ball_python','green_tree_snake',
  'tuna','sea_bream','salmon',
  'clownfish','angelfish','tang_fish',
  'tiger_puffer','porcupinefish','boxfish',
  'firefly_squid','giant_squid','cuttlefish',
  'spiny_lobster','mantis_shrimp','cherry_shrimp',
  'green_sea_turtle','galapagos_tortoise','box_turtle',
  'tree_frog','poison_dart_frog','bullfrog',
  'moon_jellyfish','lions_mane_jelly','box_jellyfish',
  'common_seahorse','leafy_seadragon','pygmy_seahorse',
  'blue_starfish','crown_of_thorns','sunflower_star',
  'harp_seal','elephant_seal','spotted_seal',
  'sea_otter','river_otter','giant_otter',
  'manta_ray','stingray','electric_ray',
  'purple_urchin','long_spine_urchin','pencil_urchin',
  'swallowtail_caterpillar','monarch_caterpillar','hornworm',
  'seven_spot_ladybug','asian_ladybug','yellow_ladybug',
  'carpenter_ant','fire_ant','leaf_cutter_ant',
  'grasshopper','locust','katydid',
  'honeybee','bumblebee','carpenter_bee',
  'garden_snail','giant_african_snail','sea_slug',
  'red_dragonfly','blue_dragonfly','damselfly',
  'cicada_brown','periodical_cicada','green_cicada',
  'japanese_firefly','firefly_swarm','glowworm',
  'green_mantis','orchid_mantis','dead_leaf_mantis',
  'garden_spider','jumping_spider','tarantula',
  'field_cricket','bell_cricket','mole_cricket',
  'pillbug','woodlouse','giant_isopod',
].map(name => `./images/varieties/${name}.jpg`);

const urlsToCache = [...APP_FILES, ...IMAGES, ...VARIETY_IMAGES];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) return response;
        // キャッシュにない場合はネットワークから取得してキャッシュに追加
        return fetch(event.request).then((networkResponse) => {
          // 画像リクエストなら動的にキャッシュ
          if (event.request.url.match(/\.(jpg|jpeg|png|svg)$/)) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return networkResponse;
        });
      })
      .catch(() => {
        // オフラインでキャッシュもない場合
        return new Response('Offline', { status: 503 });
      })
  );
});
