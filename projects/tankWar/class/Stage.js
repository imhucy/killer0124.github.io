function Stage(){
	this.cxt = stageContext;
	this.draw = function(){
		this.drawTankNumber();
		this.drawTankLives();
		this.drawLevel();
	}
	this.update = function(){
		this.draw();
	}
	this.drawTankNumber = function(){
		//		this.cxt.fillStyle = "#555555";
		var y = 0;
		var baseX = 410;
		for (var i = 0; i < curEnemy; i++) {
			if ( i % 2 === 0 ){
				x = baseX ;
				y += 20 ;
			}
			else
				x = baseX+25 ;
			
			var nTank = new NumberTank(x,y);
			nTank.draw();
		}
	}
	
	this.drawTankLives  = function(){
		this.cxt.fillStyle = "#000000"
		this.cxt.font = "25px MS Sans Serif"
		this.cxt.fillText("1P" , 410 , 250) ;
		
		var color = ['#6699CC' , '#006699']
		nTank = new NumberTank(410 , 260 , color);
		nTank.draw()
		this.cxt.fillStyle = "#006699"
		this.cxt.font = "15px MS Sans Serif"
		this.cxt.fillText("×" , 430 , 272) ;
		this.cxt.fillText(hero.lives , 440 , 272 );
	}
	
	this.drawLevel      = function(){
		// 三角形，红旗
		this.cxt.fillStyle = '#ff0000';
		this.cxt.beginPath();
		this.cxt.lineTo(412 , 300);
		this.cxt.lineTo(430 , 315);
		this.cxt.lineTo(412 , 315);
		this.cxt.closePath();
		this.cxt.fill();
		// 旗杆
		this.cxt.strokeStyle = '#000000';
		this.cxt.lineWidth = 4
		this.cxt.beginPath();
		this.cxt.moveTo(410 , 330);
		this.cxt.lineTo(410 , 300);
		this.cxt.closePath();
		this.cxt.stroke();
		
		this.cxt.fillStyle = "#000000"
		this.cxt.font = "15px MS Sans Serif"
		this.cxt.fillText(level , 420 , 330) ;
	}
}
