
$(function(){
	$(".wrap ul li").mouseover(function(){
		$(this).stop(true).animate({width:"1024px"},2000).siblings().stop(true).animate({width:"100px"},2000);
	});
});