/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
this.addEventListener('install', function (event) {
  /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
  event.waitUntil(
    /* 创建一个名叫V1的缓存版本 */
    caches.open('v1').then(function (cache) {
      /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
      return cache.addAll(['./index.html']);
    })
  );
});

/* 注册fetch事件，拦截全站的请求 */
this.addEventListener('fetch', function (event) {
  event.respondWith(
    // magic goes here

    /* 在缓存中匹配对应请求资源直接返回 */
    caches.match(event.request)
  );
});

/* 监听消息，通知其他 Tab 页面 */
this.addEventListener('message', function(event) {
  this.clients.matchAll().then(function(clients) {
    clients.forEach(function(client) {
      // 这里的判断目的是过滤掉当前 Tab 页面，也可以使用 visibilityState 的状态来判断
      if(!client.focused) {
        client.postMessage(event.data)
      }
    })
  })
})