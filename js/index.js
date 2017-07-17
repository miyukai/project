$("#nav>ul>li").hover(function (){
	var index = $(this).index()*150+"px";
	$(this).parent().css({"background-position-x":index,"transition":"all .8s"});
},function (){
	$(this).parent().css({"background-position-x":0,"transition":"all .8s"})
})
var rtn = document.getElementsByClassName("returnTop")[0];
window.onscroll = function (){
	if (document.body.scrollTop>=750) {
		rtn.style.opacity = 1;
		rtn.style.transition = "all .8s";
	}else{
		rtn.style.opacity = 0;
		rtn.style.transition = "all .8s";
	}
}
var main = document.getElementsByClassName("main_yewu_right")[0].children;
var lefT = document.getElementsByClassName("main_yewu_left")[0].firstElementChild;
var kuai = document.getElementsByClassName("kuai")[0];
var arr = ["img/main_3_left_huanle.jpg","img/main_3_left_menghuan.jpg","img/main_3_left_shui.jpg","img/main_3_left_shenhua.jpg"];
var arr1 = ["rgba(209,42,147,.8)","rgba(254,200,0,0.8)","rgba(9,181,251,0.8)","rgba(105,205,52,0.8)"]
for (var i=0;i<main.length;i++) {
	main[i].index = i;
	main[i].onmouseover = function (){
		lefT.src = arr[this.index];
		kuai.style.backgroundColor = arr1[this.index];
	}
	main[i].onmouseout = function (){
		lefT.src = arr[this.index];
		kuai.style.backgroundColor = arr1[this.index];
	}
}
var app = angular.module("app",[]);
app.controller("ctrl",function ($scope,$http){
	$http.get("data/index.json").success(function (data){
		$scope.language = data[0].language[0];
		$scope.img = data[0].img;
		console.log($scope.img);
		$scope.hotFont = data[0].hotFont;
		console.log($scope.hotFont);
		$scope.service = data[0].service;
		console.log($scope.service);
	})
})