$(function(){
	//导航条背景字体颜色变色点击事件样式
	$(".nav li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find("ul").removeClass("sennavLevelon");
	})
	//二级菜单事件hover事件
	$(".nav li").on("hover",function(){
		if($(".nav li").hasClass("droparrow")){
			$(this).find("ul").addClass("sennavLevelon")
		}
	})
	//二级菜单移入事件
	$(".nav li").on("mouseenter",function(){
		if($(".nav li").hasClass("droparrow")){
			$(this).find("ul").addClass("sennavLevelon");
		}
	})
	//二级菜单移出事件
	$(".nav li").on("mouseleave",function(){
		if($(".nav li").hasClass("droparrow")){
			$(this).find("ul").removeClass("sennavLevelon")
		}
	})
	//含有分页的动态效果
	$(".page a").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	//左侧导航的动态样式
	//鼠标移入移出处样式
	//鼠标点击事件样式
	$(".submenu").click(function(){
		$(this).find("ul").toggleClass("shows").parent().siblings(".submenu").find("ul").removeClass("shows");
		$(this).find("span").toggleClass("toleft").parent().siblings(".submenu").find("span").removeClass("toleft");
	})
	$(".submenu li").click(function(){
		$(this).addClass("currentli");
	})
})

	