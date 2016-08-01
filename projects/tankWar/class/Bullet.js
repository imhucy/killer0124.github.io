function Bullet ( x, y ,dir ,type ,belongTo){
	
	
	this.dir = dir;
	this.speed=3;
	this.w = 4;
	this.h = 4;
	
	this.arcX = x;
	this.arcY = y;
	this.tempArcX = x;
	this.tempArcY = y;
	
	this.x = this.arcX - this.w / 2;
	this.y = this.arcY - this.h / 2;
	
	this.tempX = this.x;
	this.tempY = this.y;
	
	this.hit = false;
	this.isDestroyed = false;
	this.type = type;
	
	this.cxt = tankContext;
	this.isHit = function(){
		// 边界判断
		switch ( this.dir ){
			case DIR_UP:
				this.hit = ( this.tempY < STAGE_Y );
				this.isDestroyed = this.hit;
			break;
			case DIR_RIGHT:
				this.hit = ( this.tempX > ( STAGE_X + STAGE_WIDTH - this.w ) );
				this.isDestroyed = this.hit;
			break;
			case DIR_DOWN:
				this.hit = ( this.tempY > ( STAGE_Y + STAGE_HEIGHT - this.h) );
				this.isDestroyed = this.hit;
			break;
			case DIR_LEFT:
				this.hit = ( this.tempX < STAGE_X );
				this.isDestroyed = this.hit;
			break;
		}
		// 地图判断
		if ( bulletMapCollision( this,map ) ){
			this.hit = true;
			this.isDestroyed = this.hit;
		}
		// 子弹对冲
		if( bulletBulletCollision(this) ){
			this.hit = true;
			this.isDestroyed = this.hit;
		}
		// 坦克判断
		if ( bulletTankCollision( this , this.type ) ){
			this.hit = true;
			this.isDestroyed = this.hit;
			this.boomType = BOOM_TYPE_BIG;
		}
	}
	this.move = function(){
		this.tempArcX = this.arcX;
		this.tempArcY = this.arcY;
		this.tempX = this.tempArcX - this.w / 2;
		this.tempY = this.tempArcY - this.h / 2;
		switch (this.dir){
			case DIR_UP : 
				this.tempY -= this.speed;
				this.tempArcY -= this.speed;
				break;
			case DIR_RIGHT : 
				this.tempX += this.speed;
				this.tempArcX += this.speed;
				break;
			case DIR_DOWN : 
				this.tempY += this.speed;
				this.tempArcY += this.speed;
				break;
			case DIR_LEFT : 
				this.tempX -= this.speed;
				this.tempArcX -= this.speed;
				break;
		}
		
		this.isHit();
		if(!this.hit){
			this.x = this.tempX;
			this.y = this.tempY;
			this.arcX = this.tempArcX;
			this.arcY = this.tempArcY;
		}
	}
	
	this.draw = function(){
		if( this.isDestroyed ) {
			this.drawBoom();
			return;
		}
		this.cxt.fillStyle = "#ffffff";
		this.cxt.beginPath();
		
		this.cxt.arc( this.arcX ,this.arcY , this.w / 2 , 0 ,Math.PI*2,false );
//		this.cxt.fillRect(this.x ,this.y ,this.w ,this.h);
		this.cxt.closePath();
		this.cxt.fill();
		
		this.move();
	}
	this.boomFrame = 0;
	this.boomType  = BOOM_TYPE_SIMPLE;
	this.endBoom = false;
	this.drawBoom = function(){
		this.boomFrame+=2;
		if( this.boomFrame === 20 && this.boomType === BOOM_TYPE_SIMPLE){ this.endBoom = true; }
		if( this.boomFrame === 30 && this.boomType === BOOM_TYPE_BIG){ this.endBoom = true; }
		if( this.endBoom ) {
			this.belongTo.isShooting = false;
			return;
		}
		this.cxt.fillStyle = '#ffffff';
		//  小爆炸
		if(this.boomType === BOOM_TYPE_SIMPLE )
			for( var i = 0 ; i < 32 ; i++){
				var arc = 2 * Math.PI / 32 * i;
				this.cxt.fillRect(this.x + this.boomFrame * Math.cos( arc ), this.y + this.boomFrame * Math.sin( arc ) ,2 ,2 );
			}
		// 大爆炸
		else if( this.boomType === BOOM_TYPE_BIG )
			for( var i = 0 ; i < 64 ; i++){
				var arc = 2 * Math.PI / 32 * i;
				this.cxt.fillRect(this.x + this.boomFrame * Math.cos( arc ), this.y + this.boomFrame * Math.sin( arc ) ,3 ,3 );
			}
	}
	
	this.belongTo = belongTo;
}
