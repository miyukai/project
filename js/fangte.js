var a = 150+"px";//设置进入第二个页面的导航栏进度

//设置导航栏hover效果显示
$(".header_b>ul>li").hover(function(){
	var ind = $(this).index()*150+"px";
	$(this).parent().css({"background-position-x":ind})
},function(){
	$(this).parent().css({"background-position-x":a})
})

//设置导航栏点击后的效果以及它的显示位置
$(".header_b>ul>li").click(function(){
	a = $(this).index()*150+"px";
	$(this).parent().css({"background-position-x":a})
})

//设置滚动效果
window.onscroll = function(){
	//进行关于华强方特的页面渲染
//	console.log(document.body.scrollTop+"-"+document.body.clientHeight)
	if(document.body.scrollTop > 1300){
		//当屏幕的滚动高度大于1300时，进行第一个动画效果渲染
		$(".con3_img1 div").css({"animation":"con3_img1 1s"})
		$(".con3_img2 a").css({"animation":"con3_img2 1s"})
		$(".con3_img3 .o32").css({"animation":"con3_img3 1s"})
		$(".con3_img3 .o35").css({"animation":"con3_img35 1s"})
	}
	if(document.body.scrollTop > 2200){
		//当屏幕的滚动高度大于2200时，进行第二个动画效果渲染
		$(".con4>.con4_img:even").css({"animation":"con4_imgdan 2s"})
		$(".con4>.con4_img:odd").css({"animation":"con4_imgshuang 2s"})
	}
	if(document.body.scrollTop > 3200){
		//当屏幕的滚动高度大于3200时，进行第三个动画效果渲染
		$(".o5img3").css({"animation":"o5img3 1s"})
	}
	if(document.body.scrollTop > 3700){
		//当屏幕的滚动高度大于3700时，进行第四个动画效果渲染
		$(".o6img1").css({"animation":"o6img1 1s"})
	}
}
//设置地图坐标的渲染
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

//设置由跳转页面进入的二级导航栏显示以及点击后渲染的导航栏效果
var b = document.URL;
var c = parseInt(b.substr(b.indexOf("?")+1,1))
$(".nav_1 a").click(function(){
	c = null;
	$(this).addClass("no").siblings().removeClass("no");
	document.body.scrollTop = 520
	console.log(document.body.scrollTop )
})
//点击时传出点击下标
//var a = 0;
$(".guanyu li").click(function(){
			var a = $(this).index()
			console.log(a)
			
			console.log(document.URL)
			var c = document.URL;
			var d = c.substring(0,c.indexOf("html")+4)
			
			console.log(d.substring(0,d.lastIndexOf("/")+1))
			
			window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
			
			
			
			
			
			
			//			console.log(c.indexOf("html"))
//			window.location.href = "http://127.0.0.1:8020/mikai-fangte/guanyu.html?" +a;
			//获取当前路径的方法优化但不是唯一的
//			window.location.href = c.substring(0,c.indexOf("mikai-fangte")+13)+"guanyu.html?" +a;
//			if(a == 0){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else if(a == 1){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else if(a == 2){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else if(a == 3){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else if(a == 4){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else if(a == 5){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else if(a == 6){
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}else{
//				window.location.href = d.substring(0,d.lastIndexOf("/")+1)+"guanyu.html?" +a;
//			}
})


//设置angular的应用声明
