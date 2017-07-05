//导航
var topImg = $('#topUl').find('img');
topImg.each(function(i, v) {
	var thisSrc = $(this).prop('src');
	var thisSrc2 = thisSrc.replace('_1', '_2');
	v.onmouseenter = function() {
			topImg.eq(i).prop('src', thisSrc2);
		},
		v.onmouseleave = function() {
			topImg.eq(i).prop('src', thisSrc);
		}
})

//TAB分页头
$('.t1').click(function() {
	$(this).children('img').prop('src', 'img/gameDL/kehuduanxiazai_2.png');
	$('.t2').children('img').prop('src', 'img/gameDL/budingxiazai_1.png');
	$('.page1').show()
	$('.page2').hide()

})
$('.t2').click(function() {
	$(this).children('img').prop('src', 'img/gameDL/budingxiazai_2.png');
	$('.t1').children('img').prop('src', 'img/gameDL/kehuduanxiazai_1.png')
	$('.page1').hide()
	$('.page2').show()
})

//下载
$("#speadDL").on({
	'mouseenter': function() {
		$(this).prop('src', 'img/gameDL/gaosuxiazai_2.png')
	},
	'mouseleave': function() {
		$(this).prop('src', 'img/gameDL/gaosuxiazai_1.png')
	}
})

//必备程序
$('#bbcxUl>li').each(function(i, v) {
	v.onmouseenter = function() {
			if(i == 0) {
				$('#DX1').prop('src', 'img/gameDL/DirectX9.0_2.png')
			} else if(i == 1) {
				$('#AT1').prop('src', 'img/gameDL/ATI_2.png')
			} else if(i == 2) {
				$('#NV1').prop('src', 'img/gameDL/NVIDIA_2.png')
			}
		},
		v.onmouseleave = function() {
			if(i == 0) {
				$('#DX1').prop('src', 'img/gameDL/DirectX9.0_1.png')
			} else if(i == 1) {
				$('#AT1').prop('src', 'img/gameDL/ATI_1.png')
			} else if(i == 2) {
				$('#NV1').prop('src', 'img/gameDL/NVIDIA_1.png')
			}
		}
})

//显示更多补丁
$('#more').click(function() {
	$('#tbody').append(
		'<tr class="tr">' +
		'<td>Pctch0.0005_0.0005</td>' +
		'<td>2017.05.03</td>' +
		'<td>170.00M</td>' +
		'<td><a href="#">高速下载</a></td>' +
		'</tr>' +
		'<tr class="tr">' +
		'<td>Pctch0.0005_0.0005</td>' +
		'<td>2017.05.03</td>' +
		'<td>170.00M</td>' +
		'<td><a href="#">高速下载</a></td>' +
		'</tr>');

})