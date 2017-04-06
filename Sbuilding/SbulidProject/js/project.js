$(function () {
	//更改对应页面的一级导航样式
	$(".nav>.firnavLevel>li").eq(4).addClass("active").siblings().removeClass("active");
	//工程左侧导航的动态样式
	//鼠标移入移出处样式
	// $(".proleftnav li").hover(function(){	
	// 	$(this).addClass("on").siblings().removeClass("on");
	// })
	// $(".proleftnav li").mouseenter(function(){
	// 	$(this).addClass("on");
	// })
	// $(".proleftnav li").mouseleave(function(){
	// 	$(this).removeClass("on")
	// })
	//鼠标点击事件样式
	$(".proleftnav li").click(function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on").siblings().removeClass("on");
		}
	})
})