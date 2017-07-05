var serviceImg = $('#hd_ul').find('img');
serviceImg.each(function(i, v) {
	var thisSrc = $(this).prop('src')
	var thisSrc2 = thisSrc.replace('_1', '_2')
	v.onmouseenter = function() {
			serviceImg.eq(i).prop('src', thisSrc2);
		},
		v.onmouseleave = function() {
			serviceImg.eq(i).prop('src', thisSrc);
		}
})

$('.goin').find('a').on({
	'mouseenter': function() {
		var goinImg = $(this).children('img').prop('src');
		$(this).children().prop('src', goinImg.replace('_1', '_2'));
	},
	'mouseleave': function() {
		var goinImg = $(this).children('img').prop('src');
		$(this).children().prop('src', goinImg.replace('_2', '_1'));
	}
});
$('#sub').on({
	'mouseenter': function() {
		$(this).css('background', 'url(img/login/denglu_2.png)')
	},
	'mouseleave': function() {
		$(this).css('background', 'url(img/login/denglu_1.png)')
	}
})