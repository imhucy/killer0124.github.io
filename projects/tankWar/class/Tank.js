/**
 * 坦克基类
 */
function Tank(){
	this.x = 0;
	this.y = 0;
	this.w = 30;
	this.h = 30;
	this.speed = 1;
	this.hit = false;
	this.isAI = false;
	this.isShooting = false;
	this.frame = 0;
	
	this.bullet = null;
	this.isDestroyed = false;
	this.tempX = 0;
	this.tempY = 0;
	
	this.move = function (){
		this.tempX = this.x;
		this.tempY = this.y;
		if( this.isAI ){
			this.frame++;
			if( this.hit || this.frame % 100 === 0 ){
				this.dir = parseInt(Math.random()*4);
				// this.hit = false;
				this.frame = 0;
				
			}
			
		}
		
		if(this.dir == DIR_UP){
			this.tempY -= this.speed;
		}else if(this.dir == DIR_DOWN){
			this.tempY += this.speed;
		}else if(this.dir == DIR_RIGHT){
			this.tempX += this.speed;
		}else if(this.dir == DIR_LEFT){
			this.tempX -= this.speed;
		}
		
		// 碰撞检测
		this.isHit();
		if(!this.hit){
			this.x = this.tempX;
			this.y = this.tempY;
		}
	}
	
	this.livesDown = function (){
		this.lives--;
		if( this.lives === 0 ){
			enemy.remove( this );
		}
	}
	
	this.isHit = function(){
		
		// 边界判断
		switch ( this.dir ){
			case DIR_UP:
				this.hit = ( this.tempY < STAGE_Y )
			break;
			case DIR_RIGHT:
				this.hit = ( this.tempX > ( STAGE_X + STAGE_WIDTH - this.w ) );
			break;
			case DIR_DOWN:
				this.hit = ( this.tempY > ( STAGE_Y + STAGE_HEIGHT - this.h) );
			break;
			case DIR_LEFT:
				this.hit = ( this.tempX < STAGE_X );
			break;
		}
		// 地图判断
		if( tankMapCollision(this , map) ){
			this.hit = true;
		};
		// 坦克和坦克碰撞
		if( tankTankCollision(this) ){
			this.hit = true;
		}
	}
}
function NumberTank(x , y , color){
	this.Tank=Tank;
    this.Tank();
    delete this.Tank;
    
    this.x = x;
    this.y = y;
    this.cxt = stageContext;
    this.color = color || ['#000000','#999999'];
    this.draw = function(){
    	var tank = this;
		var tankWheelWidth = 3;
		var tankWheelHeight = 15;
		var tankMainWidth = 9;
		var tankMainHeight = 9;
		var tankX = this.x;
		var tankY = this.y;
		var cxt = this.cxt;
		
//	  	console.log(tankX);
		
		var tankMainColor  = this.color[0];
		var tankSecondColor= this.color[1];
		
		cxt.fillStyle = tankMainColor;
		cxt.fillRect(tankX, tankY, tankWheelWidth, tankWheelHeight);
		cxt.fillRect(tankX + tankWheelWidth + tankMainWidth + 2, tankY, tankWheelWidth, tankWheelHeight);
		cxt.fillRect(tankX + tankWheelWidth + 1, tankY + (tankWheelHeight - tankMainHeight) / 2, tankMainWidth, tankMainHeight);
		// 坦克炮筒和盖子颜色
//		 cxt.fillStyle = tankSecondColor;
		cxt.strokeStyle = tankSecondColor;
		cxt.lineWidth = 1;
		cxt.beginPath();
		cxt.arc(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2, tankMainWidth / 2 - 1, 0, 360, false);
		 cxt.closePath();
		cxt.stroke();

		cxt.strokeStyle = tankSecondColor;
		cxt.beginPath();
		cxt.lineWidth = 2;
		cxt.moveTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2);
		cxt.lineTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY);
		cxt.closePath();
		cxt.stroke();
    }
}

function Hero(){
	this.x = 120;
	this.y = 360;
	this.cxt = tankContext;
	this.dir = DIR_UP;
	this.lives = 9;
	this.speed = 2.5;
	this.color = ['#6699CC' , '#006699'];
	this.draw = function(){
		this.hit = false;
		var tank = this;
		var tankWheelWidth = 6;
		var tankWheelHeight = 30;
		var tankMainWidth = 16;
		var tankMainHeight = 16;
		var tankX = this.x;
		var tankY = this.y;
		var cxt = this.cxt;
		
		var tankMainColor  = tank.color[0];
		var tankSecondColor= tank.color[1];
		switch(tank.dir) {
			case DIR_UP:
			case DIR_DOWN:
				// 坦克主体颜色
				cxt.fillStyle = tankMainColor;
				cxt.fillRect(tankX, tankY, tankWheelWidth, tankWheelHeight);
				cxt.fillRect(tankX + tankWheelWidth + tankMainWidth + 2, tankY, tankWheelWidth, tankWheelHeight);
				cxt.fillRect(tankX + tankWheelWidth + 1, tankY + (tankWheelHeight - tankMainHeight) / 2, tankMainWidth, tankMainHeight);
				// 坦克炮筒和盖子颜色
				cxt.fillStyle = tankSecondColor;
				cxt.arc(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2, tankMainWidth / 2 - 1, 0, 360, false);
				// cxt.closePath();
				cxt.fill();
	
				cxt.strokeStyle = tankSecondColor;
				cxt.beginPath();
				cxt.lineWidth = 4;
				cxt.moveTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2);
				if(tank.dir === DIR_UP) {
					cxt.lineTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY);
	
				} else if(tank.dir === DIR_DOWN) {
					cxt.lineTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight);
				}
				cxt.closePath();
				cxt.stroke();
				break;
			case DIR_RIGHT:
			case DIR_LEFT:
				cxt.fillStyle = tankMainColor;
				cxt.fillRect(tankX, tankY, tankWheelHeight, tankWheelWidth);
				cxt.fillRect(tankX, tankY + tankWheelWidth + tankMainWidth + 2, tankWheelHeight, tankWheelWidth);
				cxt.fillRect(tankX + tankWheelWidth + 1, tankY + (tankWheelHeight - tankMainHeight) / 2, tankMainWidth, tankMainHeight);
	
				cxt.fillStyle = tankSecondColor;
				cxt.arc(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2, tankMainWidth / 2 - 1, 0, 360, false);
				cxt.fill();
				cxt.strokeStyle = tankSecondColor;
				cxt.beginPath();
				cxt.lineWidth = 4;
				cxt.moveTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2);
				if(tank.dir === 1)
					cxt.lineTo(tankX + tankWheelHeight, tankY + tankWheelHeight / 2);
				else if(tank.dir === 3)
					cxt.lineTo(tankX, tankY + tankWheelHeight / 2)
				cxt.closePath();
				cxt.stroke();
				break;
		}
	};
	this.reset = function(){
		this.x = 120;
		this.tempX = 120;
		this.y = 360;
		this.tempY = 360;
		this.dir = DIR_UP;
	}
	this.livesDown = function (){
		this.lives--;
		console.log('lives : ' + this.lives)
		if( this.lives <= 0 ){
			hero.dead();
			gameOver();
		}else{
			this.reset();
		}
	}
	this.dead = function(){
		this.x = -1000;
		this.tempX = -1000;
		this.y = -1000;
		this.tempY = -1000;
		this.dir = DIR_UP;
	}
	
	this.shoot = function(){
		if( !this.isShooting ){
			switch ( this.dir ){
				case DIR_UP:
					this.bullet = new Bullet( this.x + this.w/2 ,this.y , this.dir , BULLET_TYPE_HERO ,this);
				break;
				case DIR_RIGHT:
					this.bullet = new Bullet( this.x + this.w ,this.y + this.h / 2 , this.dir , BULLET_TYPE_HERO ,this);
				break;
				case DIR_DOWN:
					this.bullet = new Bullet( this.x + this.w/2 ,this.y + this.h , this.dir , BULLET_TYPE_HERO ,this);
				break;
				case DIR_LEFT:
					this.bullet = new Bullet( this.x  ,this.y+this.h/2 , this.dir , BULLET_TYPE_HERO ,this);
				break;
			}
			bullet.push(this.bullet);
			this.isShooting = true;
		}
	}
}
Hero.prototype = new Tank();


function FastEnemy(x,y){
	this.Tank=Tank;
    this.Tank();
    delete this.Tank;
	
	this.x = x;
	this.y = y;
	this.cxt = tankContext;
	this.dir = DIR_DOWN;
	this.isAI = true;
	this.lives = 1;
	this.speed = 1.5;
	this.star = new Star(this.x + 15,this.y + 15);
	this.color = [
		[ '#E6E365' ,'#FFFC66' ]
	];
	this.probability = 0.6 ;
	this.draw = function(){
		if( !this.star.isDestroyed ){
			this.star.draw();
			return ;
		}
		this.hit = false;
		var tank = this;
		var tankWheelWidth = 6;
		var tankWheelHeight = 30;
		var tankMainWidth = 16;
		var tankMainHeight = 16;
		var tankX = this.x;
		var tankY = this.y;
		var cxt = this.cxt;
		
		var tankMainColor  = tank.color[tank.lives-1][0];
		var tankSecondColor= tank.color[tank.lives-1][1];
		switch(tank.dir) {
			case DIR_UP:
			case DIR_DOWN:
				// 坦克主体颜色
				cxt.fillStyle = tankMainColor;
				cxt.fillRect(tankX, tankY, tankWheelWidth, tankWheelHeight);
				cxt.fillRect(tankX + tankWheelWidth + tankMainWidth + 2, tankY, tankWheelWidth, tankWheelHeight);
				cxt.fillRect(tankX + tankWheelWidth + 1, tankY + (tankWheelHeight - tankMainHeight) / 2, tankMainWidth, tankMainHeight);
				// 坦克炮筒和盖子颜色
				cxt.fillStyle = tankSecondColor;
				cxt.arc(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2, tankMainWidth / 2 - 1, 0, 360, false);
				// cxt.closePath();
				cxt.fill();
	
				cxt.strokeStyle = tankSecondColor;
				cxt.beginPath();
				cxt.lineWidth = 4;
				cxt.moveTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2);
				if(tank.dir === 0) {
					cxt.lineTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY);
	
				} else if(tank.dir === 2) {
					cxt.lineTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight);
				}
				cxt.closePath();
				cxt.stroke();
				break;
			case DIR_RIGHT:
			case DIR_LEFT:
				cxt.fillStyle = tankMainColor;
				cxt.fillRect(tankX, tankY, tankWheelHeight, tankWheelWidth);
				cxt.fillRect(tankX, tankY + tankWheelWidth + tankMainWidth + 2, tankWheelHeight, tankWheelWidth);
				cxt.fillRect(tankX + tankWheelWidth + 1, tankY + (tankWheelHeight - tankMainHeight) / 2, tankMainWidth, tankMainHeight);
	
				cxt.fillStyle = tankSecondColor;
				cxt.arc(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2, tankMainWidth / 2 - 1, 0, 360, false);
				cxt.fill();
				cxt.strokeStyle = tankSecondColor;
				cxt.beginPath();
				cxt.lineWidth = 4;
				cxt.moveTo(tankX + tankMainWidth / 2 + tankWheelWidth + 1, tankY + tankWheelHeight / 2);
				if(tank.dir === 1)
					cxt.lineTo(tankX + tankWheelHeight, tankY + tankWheelHeight / 2);
				else if(tank.dir === 3)
					cxt.lineTo(tankX, tankY + tankWheelHeight / 2)
				cxt.closePath();
				cxt.stroke();
				break;
		}
		
		this.times++;
		if ( this.times % 50 === 0 ){
			this.times = 0;
			var rand = Math.random();
			if( rand < this.probability ){
				this.shoot();
			}
		}
		this.move();
	};
	this.times = 0 ; 
	this.shoot = function(){
		if( !this.isShooting ){
			switch ( this.dir ){
				case DIR_UP:
					this.bullet = new Bullet( this.x + this.w/2 ,this.y , this.dir , BULLET_TYPE_ENEMY ,this);
				break;
				case DIR_RIGHT:
					this.bullet = new Bullet( this.x + this.w ,this.y + this.h / 2 , this.dir , BULLET_TYPE_ENEMY ,this);
				break;
				case DIR_DOWN:
					this.bullet = new Bullet( this.x + this.w/2 ,this.y + this.h , this.dir , BULLET_TYPE_ENEMY ,this);
				break;
				case DIR_LEFT:
					this.bullet = new Bullet( this.x  ,this.y+this.h/2 , this.dir , BULLET_TYPE_ENEMY ,this);
				break;
			}
			bullet.push(this.bullet);
			this.isShooting = true;
		}
		
	}
}

function SimpleEnemy(x,y){
	this.FastEnemy=FastEnemy;
    this.FastEnemy(x,y);
    delete this.FastEnemy;
	
	this.cxt = tankContext;
	this.dir = DIR_DOWN;
	this.isAI = true;
	this.speed = 1;
	this.lives = 1;
	this.star = new Star(this.x + 15,this.y + 15);
	this.color = [
		[ '#FFFFCC' ,'#CCFFFF' ]
	];
	this.probability = 0.3;

}

function NormalEnemy(x,y){
	this.FastEnemy=FastEnemy;
    this.FastEnemy(x,y);
    delete this.FastEnemy;
	this.speed = 1;
	this.lives = 2;
	this.cxt = tankContext;
	this.color = [
		[ '#99CC33' ,'#FF9900' ],
		[ '#FF9900' ,'#ffff00' ]
	];
	this.probability = 0.4;
}


function HardEnemy(x,y){
	this.FastEnemy=FastEnemy;
    this.FastEnemy(x,y);
    delete this.FastEnemy;
	this.speed = 0.5;
	this.lives = 4;
	this.cxt = tankContext;
	this.color = [
		[ '#1F1F20' ,'#2B4C7E' ],
		[ '#2B4C7E' , '#567EBB'],
		[ '#567EBB' , '#606D80'],
		[ '#606D80' , '#DCE0E6']
	];
	this.probability = 0.4;
}