let a = 666;

console.log('shared-worker');
onconnect = function (e) {
  const port = e.ports[0];
  console.log('shared-worker connect');

  // 不能使用这种方式监听事件
  // port.addEventListener('message', () => {
  //   port.postMessage(++a);
  // });

  port.postMessage(a);

  port.onmessage = () => {
    port.postMessage(++a);
  };
  console.log('当前点赞次数:', a);
};
