$(function(){
	// 下拉菜单
	$('.header_nav').find('li').hover(function(){
		$('.header_active1').css({background:'#000',color:'#dfb68e'});
		$(this).siblings().find('a').removeClass('header_active');
		$(this).find('a').addClass('header_active');
		$(this).find('ul').stop().slideDown(500);
	},function(){
		$(this).find('a').removeClass('header_active');
		$(this).find('ul').stop().slideUp(500);
		$('.header_active1').css({background:'#dfb68e',color:'#000'});
	})
	// 联系我们
	 $('.contant').click(function(){
    	var scrollHeight = $(document).height();
	    var windowHeight = $(window).height();
	    var h=scrollHeight-windowHeight;
	    var tp=$(window).scrollTop();
    	var timer=setInterval(function(){
    		tp=1.05*tp+5;
    		if(tp<=0){clearInterval(timer);}	
            if(tp>=h){clearInterval(timer);}
            $('body').scrollTop(tp);   
             console.log(tp,scrollHeight,windowHeight,h);     
        },16)
        
    })
})