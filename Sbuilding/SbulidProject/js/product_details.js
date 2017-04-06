$(function(){
	//更改对应页面的一级导航样式
	//根据浏览器传入的参数在不同，导航条上对应的样式发生改变
	var url=document.location.href;
	var indexs=url.slice(-1);
	$(".nav>.firnavLevel>li").eq(indexs).addClass("active").siblings().removeClass("active");
	var url=document.location.href;
	var indexs=url.slice(-1);
	$(".nav>.firnavLevel>li").eq(indexs).addClass("active").siblings().removeClass("active");
	//点击跳转到QQ聊天界面
	$(".advice").click(function(){
		window.location.href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes";
	})
	//点击返回到上一页
	$(".back").click(function(){
		//window.history.back(-1);
		window.location.href="product_center.php"
	})
})