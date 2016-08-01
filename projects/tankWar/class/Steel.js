function Steel( x, y){
	this.x = x;
	this.y = y;
	
	this.w = 15;
	this.h = 15;
	
	this.cxt = mapContext;
//	this.tempX = this.x / 15;
//	this.tempY = this.y / 15;
	
	this.draw = function(){
		var light = this.cxt.createLinearGradient(0,0,7,8);
		light.addColorStop(0 , '#eeeeee');
		light.addColorStop(1 , '#aaaaaa');
		var dark  = this.cxt.createLinearGradient(0,0,8,7);
		dark.addColorStop(0 , "#555555");
		dark.addColorStop(1 , "#333333");
		
		this.cxt.fillStyle = light;
		this.cxt.beginPath()
		this.cxt.moveTo( this.x   , this.y   );
		this.cxt.lineTo( this.x+15, this.y   );
		this.cxt.lineTo( this.x   , this.y+15);
		this.cxt.closePath();
		this.cxt.fill();
		
		this.cxt.fillStyle = dark;
		this.cxt.beginPath();
		this.cxt.moveTo( this.x+15, this.y   );
		this.cxt.lineTo( this.x+15, this.y+15);
		this.cxt.lineTo( this.x   , this.y+15);
		this.cxt.closePath();
		this.cxt.fill();
		
		this.cxt.fillStyle = "#eeeeee";
		this.cxt.fillRect( this.x+3, this.y + 3, 7, 7);
	}
}