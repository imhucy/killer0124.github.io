$(function () {
	var aside = $('#sidebar');
	var asideWidth = aside.width();
	var main  = $('#main-content');
	var mainWidth = main.width();
	
	var asideRight = ($(document).width() - mainWidth)/2 - asideWidth;
	var px = 'px';

	asideRight = asideRight < 0 ? 0 : asideRight
	aside.css('right',asideRight + px);


	var showTime = $('#show-time');
	var showTimeItem = showTime.find('li');

	showTimeItem.each(function (i,item) {
		if( (i + 1) % 3 === 0 ) $(item).addClass('last')
	})

	var $timeline = $('.line');
	var $points   = $timeline.find('.point');
	$points.each(function(i, item) {
		var $item = $(item);
		var n = $item.find('.text').text().length;
		var tWidth = n  ? 14 + n * 15 : 55;
		$item.find('.tooltip').width( tWidth );
		console.log(n)
		// $item.find('.triangle').css({ left:(tWidth/2-10) });
		$item.find('.tooltip').css({ left :-(tWidth/2-20)});

		$item.css({left:i*(950/$points.size())+50});

		$item.hover(function() {
			$(this).find('.tooltip').show();
		}, function() {
			$(this).find('.tooltip').hide();;
		});
	});
	
})