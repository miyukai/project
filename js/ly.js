var app = angular.module("app",["ngRoute"])
app.config(function($routeProvider){
	//判断跳转页面进入时点击的导航栏位置，进行关于方特页面不同的angular渲染的效果
	var a = "/qiye"
	var b = document.URL;
	var c = parseInt(b.substr(b.indexOf("?")+1,1))
	
	$(".nav_1 a").eq(c).addClass("no").siblings().removeClass("no")
	if(c == 0){
		a = "/qiye"
	}else if(c == 1){
		a = "/hexin"
	}else if(c == 2){
		a = "/sixiang"
	}else if(c == 3){
		a = "/pinpai"
	}else if(c == 4){
		a = "/rongyu"
	}else if(c == 5){
		a = "/quanguo"
	}else if(c == 6){
		a = "/lianxi"
	}else{
		a = "/qiye"
	}
	
	//进行路由渲染
	$routeProvider
	.when("/qiye",{templateUrl:"html/qiye.html",controller:"ctrl"})
	.when("/hexin",{templateUrl:"html/hexin.html",controller:"ctrl"})
	.when("/sixiang",{templateUrl:"html/sixiang.html",controller:"ctrl"})
	.when("/pinpai",{templateUrl:"html/pinpai.html",controller:"ctrl"})
	.when("/rongyu",{templateUrl:"html/rongyu.html",controller:"ctrl"})
	.when("/quanguo",{templateUrl:"html/quanguo.html",controller:"ctrl"})
	.when("/lianxi",{templateUrl:"html/lianxi.html",controller:"ctrl"})
	.otherwise({
		redirectTo:a
	})
})