$(function(){
	//根据浏览器传入的参数在不同，导航条上对应的样式发生改变
	var url=document.location.href;
	var indexs=url.slice(-1);
	$(".nav>.firnavLevel>li").eq(indexs).addClass("active").siblings().removeClass("active");
	//左侧导航的动态样式
	//鼠标移入移出处样式
	// $(".leftnav li").hover(function(){	
	// 	$(this).addClass("on");
	// 	$(this).find("span").remove();	
	// })
	// $(".leftnav li").mouseenter(function(){
	// 	$(this).addClass("on");
	// 	$(this).find("span").remove();
	// })
	// $(".leftnav li").mouseleave(function(){
	// 	$(this).removeClass("on")
	// 	$(this).find("div").append("<span></span>");
	// })
	//鼠标点击事件样式
	// $(".leftnav li").click(function(){
	// 	if(!$(this).hasClass("on")){
	// 		$(this).addClass("on");
	// 		$(this).find("span").remove();
	// 	}
	// })
})