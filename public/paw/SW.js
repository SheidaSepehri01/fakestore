const caheName = "CACHE-1";

let self = this;

const appShellFiles = [
  "offline.html",
  "../src/components/homePage/homePage.js",
  "../src/components/header/header.js",
  "../src/components/userPage/userPage.js",
  "../src/components/menu/menu.js",
  "../src/components/cart/cart.js",
  "../src/components/CatagoryCardes/CatagoryCardes.js"
];
const Images = [
    "../src/images/all/alina-rubo-HjO5vw_PP5c-unsplash.jpg",
    "../src/images/all/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg",
    "../src/images/all/crystalweed-cannabis-QrK0mgbk2r0-unsplash.jpg",
    "../src/images/all/kara-eads-buhmhprfo3g-unsplash.jpg",
    "../src/images/all/kevs-VsnjiMUt7Cg-unsplash.jpg",
    "../src/images/all/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
    "../src/images/all/nick-fewings-1SsUquHPNT8-unsplash.jpg",
    "../src/images/all/serghei-savchiuc-_mQ37Rxqb9E-unsplash.jpg",
    "../src/images/all/surface-gYDNf4vymRk-unsplash.jpg",
]
const contentToCache = appShellFiles.concat(Images);

self.addEventListener('install',(e)=>{
    console.log('SW was installed')
    e.waitUntil(
        (async ()=>{
            const cache = await caches.open(caheName);
            await cache.addAll(contentToCache)
        })
    )
})
