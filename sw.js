/* Service Worker — Transportadora Casagrande
   Cacheia o casco do app (abre instantâneo e funciona offline para a interface).
   Dados da planilha SEMPRE vêm da rede (sem cache). */
const CACHE='tc-v2';
const CASCO=['./index.html','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CASCO)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  // API do Apps Script e logo: SEMPRE rede, nunca cacheia
  if(url.hostname==='script.google.com')return;
  // casco do app: rede primeiro, cache como fallback (offline)
  e.respondWith(
    fetch(e.request).then(r=>{
      const copia=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copia)).catch(()=>{});
      return r;
    }).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html')))
  );
});
