$(function(){
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