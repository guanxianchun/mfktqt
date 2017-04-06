$(function(){
	//首页轮播图效果
	var index=0;
  	var $_picn=$(".bannerimg").length;
  	if($_picn>1){
    	for(var i=1;i<=$_picn;i++){
     	 var $_span="<span></span>";
     	 $($_span).addClass("circle");
      	$(".bannercircle").append($_span);
    }
    	$(".bannercircle span").eq(0).addClass("circleactive");
    	$(".bannerimg").eq(0).show().siblings(".bannerimg").hide();
  }
  setInterval(function(){
   	 	show(index);
    	index++;
    	if(index==$_picn){index=0;}
  	},3000);
  	function show(index){
    $(".bannercircle span").removeClass("circleactive").eq(index).addClass("circleactive");
    $(".bannerimg").eq(index).fadeIn(500).siblings(".bannerimg").fadeOut(500);
  }
  //首页下面导航条效果
  $(".levelnav li").on("click",function(){
  		$(this).addClass("on").siblings().removeClass("on");
  })
  //分类的标签页下面的效果
  $(".fltab li").on("click",function(){
  		$(this).addClass("active").siblings().removeClass("active");
  })
  //回到顶部效果
  $(".backtop").on("click",function(){
    console.log($('.backtop'))
    $(window).scrollTop(0);
    return false;
  })
  //选项卡切换效果
  $(".tabchange li").click(function(){
      $(this).addClass("on").siblings().removeClass("on");
      var index=$(this).index();
      $(".tabs>div").eq(index).show().siblings().hide();
  })
    
})