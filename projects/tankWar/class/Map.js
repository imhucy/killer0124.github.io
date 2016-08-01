function Map ( map ){
	this.map = map;
	this.bricksNum = 0;
	this.steelsNum = 0;
	
	this.bricks = [];
	this.steels = [];
	
	for(var row = 0 ; row < map.length ; row++){
		for (var col = 0 ; col <map[ 0 ].length ; col++ ){
			if( this.map[row][col] === MAP_BRICK ){
				this.bricksNum++;
				this.bricks.push( new Brick( (col)*15 , (row)*15 ) )
			}else if( this.map[row][col] === MAP_STEEL ){
				this.steelsNum++;
				this.steels.push( new Steel( (col)*15 , (row)*15 ) )
			}
		}
	}
	
	this.draw = function(){
		for ( var i = 0 ; i < this.bricksNum ; i++ ) {
			this.bricks[i].draw();
		}
		for ( var i = 0 ; i < this.steelsNum ; i++ ) {
			this.steels[i].draw();
		}
	}
}
