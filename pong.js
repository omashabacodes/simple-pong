$( function() {
    var canvas = document.getElementById('pong');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var game = new Game(5, ctx, canvas);
    }
  });