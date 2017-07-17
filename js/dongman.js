$(".top>li").hover(function(){
	$(this).find("ul").slideDown();
},function(){
	$(this).find("ul").slideUp()
})
$(".cuo").click(function (){
	$(this).parent().css("display","none")
})
var app = angular.module("app1",[]);
app.controller("ctrl1",function ($scope,$http){
	$http.get("data/dongman.json").success(function (data){
		console.log(data[0]);
		$scope.adver = data[0].advertisement[0];
		console.log($scope.adver[0])
	})
	
})