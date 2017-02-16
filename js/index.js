$(function(){
	
	// 江诗丹顿表厂
	$('.content_a_main_row_4').hover(function(){
		$(this).find('.content_a_sc').stop().animate({left:0+'px'},400);
		$(this).find('p').stop().animate({bottom:0+'px'},400);
		$('.content_a_mvtypeface_row4').stop().animate({left:-1200*$(this).index()+'px'},800)
	
	},function(){
		$(this).find('.content_a_sc').stop().animate({left:-300+'px'},400);
		$(this).find('p').stop().animate({bottom:-30+'px'},800);
	})
	// 江诗丹顿产品系列
	fn();
	function fn(){
		$('.content_b').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(fa,2000);
		});
		$('.content_b_prev').click(function(){
			fb();
		})
		$('.content_b_next').click(function(){
			fa();
		});
		$('.content_b_btn').find('a').click(function(){
			index=$(this).index();
			$('.content_b_banner_main').find('div').stop().animate({left:-1200*index+'px'},1000);
			$('.content_b_btn').find('a').eq(index).siblings().stop().animate({width:14+'px'},1000);
			$('.content_b_btn').find('a').eq(index).stop().animate({width:30+'px'},1000);
		})
		var timer=setInterval(fa,2000);
		var index;
		function fa(){
			if(typeof index=="undefined"){index=0;}
			index=index+1;
			if(index>2){index=0;}
			$('.content_b_banner_main').find('div').stop().animate({left:-1200*index+'px'},1000)
			$('.content_b_btn').find('a').eq(index).siblings().stop().animate({width:14+'px'},1000);
			$('.content_b_btn').find('a').eq(index).stop().animate({width:30+'px'},1000)
		}
		function fb(){
			if(typeof index=="undefined"){index=0;}
			index=index-1;
			if(index<0){index=2;}
			$('.content_b_banner_main').find('div').stop().animate({left:-1200*index+'px'},1000)
			$('.content_b_btn').find('a').eq(index).siblings().stop().animate({width:14+'px'},1000);
			$('.content_b_btn').find('a').eq(index).stop().animate({width:30+'px'},1000)
		}
	}
	// 
	$('.content_c_main_row4').hover(function(){
		$(this).find('.contert_c_main_none').stop().animate({bottom:-118,opacity:1},100)
	},function(){
		$(this).find('.contert_c_main_none').stop().animate({bottom:0,opacity:0},100)
	})
})