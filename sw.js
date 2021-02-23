const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request

    if(request.method !== "GET"){//solo trabajamos cache con el metodo GET
        return
    }

    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
       /*  './',
        './index.html',
        './assets/index.js',
        './assets/MediaPlayer.js',
        './assets/plugins/AutoPlay.js',
        './assets/plugins/AutoPause.ts',
        './assets/index.css',
        './assets/ejercicio.mp4' */
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)

    return response || fetch(request) // el fecth es por si no hay cache del archivo
}

async function updateCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}