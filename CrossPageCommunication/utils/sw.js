console.log("SW Startup!");

// Install Service Worker
self.addEventListener('install', function(event){
    console.log('installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('activated!');
});

// self.addEventListener('message', function (e) {
//   // console.log('service worker receive message', e.data);
//   console.log(e);
//   e.waitUntil(
//       self.clients.matchAll().then(function (clients) {
//         console.log(clients);
//           if (!clients || clients.length === 0) {
//               return;
//           }
//           clients.forEach(function (client) {
//               client.postMessage(e.data);
//           });
//       })
//   );
// });

self.addEventListener('message', function(e) {
  console.log('service worker receive message', e.data);
  const promise = self.clients.matchAll().then(function(clients) {
    console.log(clients);
    let senderId = e.source ? e.source.id : 'unknow'
    clients.forEach(client => {
      if (senderId === client.id) {
        return
      } else {
        client.postMessage({
          client: senderId,
          message: e.data
        })
      }
    })
  })
  e.waitUntil(promise)
});