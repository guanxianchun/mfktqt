<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta http-equiv="Content-Type" content="text/x-component" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/pc.css"/>
    <link rel="stylesheet" href="css/intouchus.css" />
    <link rel="stylesheet" href="css/common.css" />
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
	<title>索一--联系我们</title>
</head>
<body>
<?php include 'html/common/header.html' ?>
<!-- begin content -->
<div id="content">
<!-- begin banner -->
	<div class="banner">
		<img src="img/intouchus.png" alt="" />
	</div>
<!-- end banner -->
<!-- begin breadnav -->
<div class="breadnav">
	<ul>
		<li class="title">你当前位置:</li>
		<li><a href="index.html">首页</a></li>
		<li class="productdetails">联系我们</li>
	</ul>
</div>
		<!-- begin intouch -->
	<div class="intouch clearfix">
		<div class="touchimgtext clearfix">
			<div class="left intouchus">
				<div class="title">
					<h2>CONTACT</h2>
					<h3>联系我们</h3>
					<div class="diliver"></div>
				</div>
				<div class="address">
					<p class="company">湖南索一建筑材料有限公司</p>
					<p class="telsy">400-000-000</p>
					<p class="emailsy">hunansuoyi@163.com</p>
					<p class="jtaddy">湖南省长沙市天心区政府对面</p>
				</div>
			</div>
			<div class="right touchform">
				<h3>给我们留言</h3>
				<form action="">
					<div class="clearfix">
						<div class="left">
							<input type="text" placeholder="姓名" /><br>
							<input type="tel" placeholder="电话" /><br>
							<input type="email" placeholder="邮箱" />
						</div>
						<div class="right">
							<textarea placeholder="内容"></textarea>
						</div>
					</div>
					<div class="btns">
						<button class="submit">提交</button>
						<button class="reset">重置</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- end intouch -->
	<!-- begin baidu map -->
		<div id="suoyimap" class="maps"></div>
	<!-- end baidu map -->
</div>
<!-- end content -->	
<?php include 'html/common/footer.html' ?>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=1u3iDOlril4CGxSQo1SeE0kdhGFvMVGN"></script>
<script type="text/javascript" src="js/smap.js"></script>
<script type="text/javascript" src="js/intouchus.js"></script>
</body>
</html>