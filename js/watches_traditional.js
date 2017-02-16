$(function(){
	$('.mvmenu_select').click(function(){
		$(this).addClass('active').stop(true,true).animate({left: -20+'px'},400).siblings().removeClass('active').animate({left: 0+'px'},400);
		$('.content_right_main').eq($(this).index()).slideDown(400).siblings().slideUp(400)
	
	})
})