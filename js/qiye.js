app.controller("ctrl",function($scope,$http){
	setTimeout(function(){
		$(".disMove").hover(function(){
			var a = $(this).hasClass("lan")
			$(this).addClass("huang").siblings().removeClass("huang")
			if(a){
				$(".quan_xuan").css({"opacity":"1"})
				$(".quan_wei").css({"opacity":"0"})
			}else{
				$(".quan_xuan").css({"opacity":"0"})
				$(".quan_wei").css({"opacity":"1"})
			}
			$(".qcl").css({"animation":"qcl 1s"})
			$(".qct").css({"animation":"qct 1s"})
			$(".qcr").css({"animation":"qcr 1s"})
			$(".qcb").css({"animation":"qcb 1s"})
		},function(){
			$(".qcl").css({"animation":"none"})
			$(".qct").css({"animation":"none"})
			$(".qcr").css({"animation":"none"})
			$(".qcb").css({"animation":"none"})
		})
		$(".disMove").css({"animation":"dismove 1s"})
		
		//荣誉的效果
		var mySwiper = new Swiper(".swiper-container", {
			loop: false,
			slidesPerView: 6,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		$(function(){
			$(".honner_down .swiper-slide").click(function(){
				$index=$(this).index()
				$(".honner_down p").removeClass("card")
				$(".honner_down p").eq($index).addClass("card")

				$(this).siblings(".swiper-slide").removeClass("bgBig")
				$(this).addClass("bgBig")
			})
		})
	},300)
	$http({
		method:"get",
		url:"data/data.json"
	}).success(function(data){
		$scope.qiye = data;
		console.log(data)
	}).error(function(err){
		console.log(1)
		console.log(err)
	})
})