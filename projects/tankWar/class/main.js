/**
 * 全局变量
 */

var stageContext = null,
	tankContext  = null,
	mapContext   = null,
	overContext  = null,
	
	menuFrame    = 0,
	map          = null;
var b = false; // 布尔工具变量
var gameState = GAME_STATE_MENU;

var key = [];
var hero   = null;
var enemy  = [];
var bullet = [];
var maxEnemy=20;
var curEnemy=20;
var level = 1;
/**
 * 主程序
 */
$(function(){
	initObject();
	initStage();
//	var fast = new FastEnemy(20,20);
//	var simple = new SimpleEnemy(10,10)
//	console.table(fast)
//	console.table(simple)
	setInterval(flash,13);
});
function initObject(){
	stageContext = $('#stage')[0].getContext('2d');
	tankContext  = $('#tank')[0].getContext('2d');
	mapContext   = $('#map')[0].getContext('2d');
	overContext  = $('#over')[0].getContext('2d');
	
	map = new Map( map1 );
	hero = new Hero();
	curEnemy=20;
}
var stage = null;
function initStage(){
	stage = new Stage();
}
function flash(){
	tankContext.clearRect(SCREEN_X,SCREEN_Y,SCREEN_X+SCREEN_WIDTH,SCREEN_Y+SCREEN_HEIGHT);
	stageContext.fillStyle = "#c7c7c7";
	stageContext.fillRect(SCREEN_X,SCREEN_Y,SCREEN_X+SCREEN_WIDTH,SCREEN_Y+SCREEN_HEIGHT);
	mapContext.fillStyle = "#000000";
	mapContext.fillRect(STAGE_X,STAGE_Y,STAGE_X+STAGE_WIDTH,STAGE_Y+STAGE_HEIGHT);
	
	keyEvent();
	
	switch(gameState){
		case GAME_STATE_MENU:
//			initObject()
			drawMenu();
			break;
		case GAME_STATE_START:
			isGotoNext();
			hero.draw()
			drawEnemy();
			drawBullet();
			addEnemy();
			map.draw();
			stage.draw();
			break;
	}
}
$(document).keydown(function(e){
	if( !key.contain(e.keyCode) ){
		key.push( e.keyCode);
	}
});

$(document).keyup(function(e){
	key.remove( e.keyCode );
});

function keyEvent(){
	switch ( gameState ){
		case GAME_STATE_MENU:
			if( key.contain(KEY_ENTER) ){
				gameState = GAME_STATE_START;
				
				clearOver();
			}
		break;
		case GAME_STATE_START:
			if( key.contain( KEY_W ) ){
				hero.dir = DIR_UP;
				hero.move();
			}else if( key.contain( KEY_D ) ){
				hero.dir = DIR_RIGHT;
				hero.move();
			}else if( key.contain( KEY_S ) ){
				hero.dir = DIR_DOWN;
				hero.move();
			}else if( key.contain( KEY_A ) ){
				hero.dir = DIR_LEFT;
				hero.move();
			}
			if( key.contain( KEY_J )){
				hero.shoot();
			}
		break;
	}
}

function drawMenu(  ){
	clearOver();
	overContext.fillStyle = '#000000';
	overContext.fillRect(SCREEN_X,SCREEN_Y,SCREEN_X+SCREEN_WIDTH,SCREEN_Y+SCREEN_HEIGHT);
	if( b ){
		menuFrame -= 5;
		b = menuFrame === 0 ? false : true;
	}
	else{
		menuFrame += 5;
		b = menuFrame === 100 ? true :false;
	}
	
	overContext.fillStyle = "rgba(255,255,255,"+(menuFrame / 100)+")";
	
	overContext.font = "20px 微软雅黑";
	var infoText = '按ENTER键开始游戏';
	overContext.fillText( infoText , SCREEN_WIDTH / 3 ,SCREEN_HEIGHT / 2 - 10);
	
}
function drawEnemy(  ){
	for(var i = 0 ; i < enemy.length ; i++){
//		if(enemy[i] instanceof FastEnemy )
			enemy[i].draw();
	}
}
function drawBullet(  ){
	for(var i = 0 ; i < bullet.length ; i++){
		if( bullet[i].endBoom ){
			bullet.removeByIndex(i);
			i--;
			return;
		}
		bullet[i].draw();
	}
	
}
/**
 * 清除幕布画布
 */
function clearOver(){
	overContext.clearRect(SCREEN_X,SCREEN_Y,SCREEN_X+SCREEN_WIDTH,SCREEN_Y+SCREEN_HEIGHT);
}
function gameOver(){
	// 显示游戏结束的字
	var cxt = overContext;
	cxt.fillStyle = 'rgba(255,255,255,1) 40px';
	cxt.fillText('GAME', 120 , 360);
	cxt.fillText('OVER', 120 , 380);
	//	重置游戏状态
	setTimeout(function(){
		gameState = GAME_STATE_MENU;
		// 重新初始化对象
		enemy = [];
		bullet=[];
		initObject();
	},2000)
}
var addenemyFrame = 150;
function addEnemy(){
	addenemyFrame++;
	if ( addenemyFrame % 200 === 0 && enemy.length <= 5 && curEnemy > 0 ){
		// 随机出现位置
		var local = Math.floor( Math.random() * 3);
		var randTank = parseInt( Math.random() * 4);
		
		var newEnemy = null;
		switch(randTank){
			case 0 :
				newEnemy = new FastEnemy(ENEMY_LOCATION[ local ] , 0);
				break;
			case 1 : 
				newEnemy = new SimpleEnemy(ENEMY_LOCATION[ local ] , 0);
				break;
			case 2 : 
				newEnemy = new NormalEnemy(ENEMY_LOCATION[ local ] , 0);
				break;
			case 3 : 
				newEnemy = new HardEnemy(ENEMY_LOCATION[ local ] , 0);
				break;
		}
//		newEnemy.x = ENEMY_LOCATION[ local ];
//		newEnemy.y = 0;
		
		enemy.push(newEnemy);
		curEnemy--;
		stage.update();
		addenemyFrame = 0
	}
	
//	stars.push( new Star( ENEMY_LOCATION[ local ] , 0 ) );
	//	动画结束的时候添加敌机
	
}
function Star( x , y ){
	this.x = x;
	this.y = y;
	this.frame = 0;
	this.bBtn = true;
	this.isDestroyed = false;
	this.times = 100;
	this.cxt = tankContext;
	var cxt = this.cxt;
	this.draw = function(){
		this.times-- ;
		if( this.times === 0) this.isDestroyed = true;
		if ( this.frame == 30 ) this.bBtn = false;
		if ( this.frame == 0  ) this.bBtn = true;
		
		if( this.bBtn ) this.frame+=2;
		else this.frame -=2 ;
		size = this.frame / 2;
		
		cxt.fillStyle = '#ffffff';
		cxt.beginPath();
		cxt.arc(this.x-size  , this.y-size  , size, 0          , Math.PI/2  , false); // 绘制
		cxt.arc(this.x-size  , this.y+size  , size, Math.PI*3/2, Math.PI*2  , false); // 绘制
		cxt.arc(this.x+size  , this.y+size  , size, Math.PI    , Math.PI*3/2, false); // 绘制
		cxt.arc(this.x+size  , this.y-size  , size, Math.PI/2  , Math.PI    , false); // 绘制
		cxt.closePath();
		
		cxt.fill();
	}
	
}
function nextLevel(){
	level = ++level === 22 ? 1 : level;
	curMap = eval("map"+level);
	map = new Map(curMap);
	curEnemy=20;
	hero.reset();
}
function isGotoNext(){
	if( 0 === enemy.length && curEnemy === 0 ){
		nextLevel();
	}
}
