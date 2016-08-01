function Collision(obj1 ,obj2){
	if( !obj1 || !obj2 ){
		return false;
	}
	var L1 = obj1.tempX          || obj1.x;
	var R1 = obj1.tempX + obj1.w || obj1.x + obj1.w;
	var T1 = obj1.tempY          || obj1.y;
	var B1 = obj1.tempY + obj1.h || obj1.y + obj1.h;
	
	var L2 = obj2.tempX          || obj2.x
	var R2 = obj2.tempX + obj2.w || obj2.x + obj2.w;
	var T2 = obj2.tempY          || obj2.y ;
	var B2 = obj2.tempY + obj2.h || obj2.y + obj2.h;
	if( R1<=L2 || L1>=R2 || T1>=B2 || B1<=T2 ){
		return false;
	}
	else{
		return true;
	}
}

function tankMapCollision (tank , map){
	
	for ( var i = 0 ; i < map.bricksNum ; i++  ){
		if ( Collision(tank ,map.bricks[ i ]) ) {
			return true;
		}
	}
	for ( var i = 0 ; i < map.steelsNum ; i++  ){
		if ( Collision(tank ,map.steels[ i ]) ) {
			return true;
		}
	}
}

function tankTankCollision(tank){
	if( tank instanceof Hero){
		for(var i = 0; i < enemy.length; i++){
			if ( Collision(tank ,enemy[ i ]) ) {
				return true;
			}
		}
	}else{
		if( Collision(tank ,hero) ) {
			return true;
		}
//		for(var i = 0; i < enemy.length; i++){
//			if ( tank !== enemy[ i ] && Collision(tank ,enemy[ i ]) ) {
//				return true;
//			}
//		}
	}
}

function bulletMapCollision (bullet , map){
	
	for ( var i = 0 ; i < map.bricksNum ; i++  ){
		if ( Collision(bullet ,map.bricks[ i ]) ) {
			// 销毁地图块
			map.bricks.removeByIndex(i);
			i--;
			map.bricksNum--;
			return true;
		}
	}
	for ( var i = 0 ; i < map.steelsNum ; i++  ){
		if ( Collision(bullet ,map.steels[ i ]) ) {
			return true;
		}
	}
}

function bulletTankCollision (bullet , bulletType){
	// 子弹类型为英雄子弹
	if( bulletType === BULLET_TYPE_HERO ){
		// 判断击中敌军坦克
		for ( var i = 0 ; i < enemy.length ; i++  ){
			if ( Collision(bullet ,enemy[ i ]) ) {
				// 销毁坦克
				// enemy.removeByIndex( i );
				// i--;
				enemy[i].livesDown();
				return true;
			}
		}
	}else if( bulletType === BULLET_TYPE_ENEMY ){
		if ( Collision(bullet ,hero) ) {
			// 销毁坦克
			hero.livesDown();
			return true;
		}
	}
}
function bulletBulletCollision (bulletObj){
	// 判断子弹对冲
	for ( var i = 0 ; i < bullet.length ; i++  ){
		if( bulletObj.type === bullet[ i ].type ) continue;
		if ( Collision(bulletObj ,bullet[ i ]) ) {
			
			bullet[i].hit = true;
			bullet[i].isDestroyed = true;
			return true;
		}
		
	}
}
