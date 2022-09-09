var Game = function Game(level, ctx, canvas) {
    this.ball = new Ball(ctx, canvas, level);
    this.paddleL = new Paddle(ctx, canvas, 'left');
    this.paddleR = new Paddle(ctx, canvas, 'right');
  
    this.canvas = canvas;
    this.reset();
  };
  
  Game.prototype.reset = function(level) {
    this.level = level;
    var that = this;
    this.interval = setInterval( function() {
      that.canvas.width = that.canvas.width;
      that.ball.frame();
      that.paddleR.frame(that.ball.position());
      that.paddleL.frame(that.ball.position());
    }, 20);
  };
