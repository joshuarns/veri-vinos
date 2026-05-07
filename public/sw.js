// Service Worker — Compra Tu Reloj
// Mínimo necesario para que Chrome muestre el botón "Instalar app".
// No cachea nada — la app siempre trae datos frescos de la API.

const CACHE_NAME = 'ctr-v1';

// Instalar: activar inmediatamente sin esperar
self.addEventListener('install', () => self.skipWaiting());

// Activar: tomar control de todas las pestañas abiertas
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// Fetch: red primero, sin caché offline para no mostrar datos viejos
// Solo interceptamos navegación (HTML) para servir el index si hay error de red
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('/index.html'))
    );
  }
});
