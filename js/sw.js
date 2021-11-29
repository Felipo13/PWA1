
const CACHE_NAME = 'Mi_cache_facherito',
urlsToCache=[
    './',
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=edfa58d52245c8d6fa64f0a94f5f88e2&hash=b6e4079cbb1617c89c0a65145d881fd1',
    './css/index.css',
    './js/res.js',
    'img/fondo.png',
    'img/Logo.png',
    'img/favicon/favicon-16x16.png'
]

//"instala" la pagina
self.addEventListener('install',e=>{

    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                .then(() => self.skipWaiting)
            })
            .catch(err => console.log('Fallo el registro del cache', err))
    )    
})


//metodo offline
self.addEventListener('activate',e=>{

    const cacheCln = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cachesName =>{
            cacheNames.map(cacheName=>{
                //elimina elementos caducos
                if (cacheCln.indexOf(cacheName)===-1) {
                    return caches.delete(cacheName)
                }
            })
        })
        //indica que termino de actualizar el cache
        .then(()=>self.clients.claim())
    )
})


//recupera recursos
self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if (res) {
                //recuperamos del cache
                return res
            }

            //recupera de la peticion la url
            return fetch(e.request)

        })
    )
})