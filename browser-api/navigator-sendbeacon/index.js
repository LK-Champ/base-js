window.addEventListener('unload', function() {
  console.log('unload');
});

window.addEventListener('beforeunload', function (event) {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';
});

if ('sendBeacon' in navigator) {
  var n = 65536; // sendBeacon limit for Chrome v40 on Windows (2^16)

  // this method courtesy of http://stackoverflow.com/questions/14343844/create-a-string-of-variable-length-filled-with-a-repeated-character
  var data = new Array(n+1).join('X'); // generate string of length n

  window.addEventListener('pagehide', function() {
      navigator.sendBeacon(
        'https://putsreq.herokuapp.com/5rlXaI4ynIlqLjTpHrnB',
        data
      );
    }, 
  false);
}