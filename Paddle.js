var Paddle = function Paddle(ctx, canvas, side) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.w = canvas.width;
    this.h = canvas.height;
    this.paddleWidth = parseInt(this.w/100, 10);
    this.paddleHeight = parseInt(this.h/10, 10);
    if (side === 'left') {
      this.x = 0;
    } else {
      this.x = this.w-this.paddleWidth;
    }
    this.y = this.h/2-this.paddleHeight/2;
    this.draw();
  };
  
  Paddle.prototype.frame = function(position) {
    if (position) {
      this.y = position[1]-this.paddleHeight/2;
    }
    this.draw();
  };
  
  Paddle.prototype.draw = function() {
    this.ctx.fillStyle = 'rgb(200,200,200)';
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.paddleWidth, this.paddleHeight);
    this.ctx.fill();
  };
  