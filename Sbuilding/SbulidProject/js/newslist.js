$(function () {
	//更改对应页面的一级导航样式
	$(".nav>.firnavLevel>li").eq(5).addClass("active").siblings().removeClass("active");
})