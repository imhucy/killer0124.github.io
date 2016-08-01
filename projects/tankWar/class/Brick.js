function Brick(x ,y) {
	this.x = x;
	this.y = y;
	
	this.w = 15;
	this.h = 15;
	this.cxt = mapContext;
//	this.tempX = x / 15;
//	this.tempY = y / 15;
	this.draw = function (){
		this.cxt.fillStyle = "#ff2241";
		this.cxt.fillRect( this.x, this.y, 15, 15);
		this.cxt.fillStyle = "#ffffff";
		this.cxt.fillRect( this.x + 7, this.y, 1, 7);
		this.cxt.fillRect( this.x, this.y + 7, 15, 1);
		this.cxt.fillRect( this.x, this.y + 14, 15, 1);
	}
}