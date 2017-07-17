var top_ul = document.getElementsByClassName("top_ul")[0];
var top_ul1 = document.getElementsByClassName("top_ul")[1];
console.log(top_ul1);
var len = top_ul.getElementsByClassName("li");
var len1 = top_ul1.getElementsByClassName("li");
var add = top_ul.getElementsByClassName("add");
console.log(add)
var add1 = top_ul1.getElementsByClassName("add1");
console.log(add1)
for(var i = 0; i < len.length; i++) {
	len[i].index = i;
	len[i].onmouseover = function() {
		var x = this.index * 139 + "px";
		this.parentElement.style.backgroundImage = "url(img/mk_bg.png) ";
		this.parentElement.style.backgroundRepeat = "no-repeat";
		this.parentElement.style.backgroundPositionX = x;
		this.parentElement.style.backgroundPositionY = 0;
		this.parentElement.style.backgroundSize = "139px 100%";
		add[this.index-1].style.display = "block";
	}
	len[i].onmouseout = function() {
		var x = this.index * 139 + "px";
		this.parentElement.style.background = "none";
		add[this.index-1].style.display = "none";
	}
}
for(var i = 0; i < len1.length; i++) {
	len1[i].index = i;
	len1[i].onmouseover = function() {
		var x = this.index * 139 + "px";
		this.parentElement.style.backgroundImage = "url(img/mk_bg.png)";
		this.parentElement.style.backgroundRepeat = "no-repeat";
		this.parentElement.style.backgroundPositionX = x;
		this.parentElement.style.backgroundPositionY = 0;
		this.parentElement.style.backgroundSize = "139px 100%";
		add1[this.index].style.display = "block";
	}
	len1[i].onmouseout = function() {
		var x = this.index * 139 + "px";
		this.parentElement.style.background = "none";
		add1[this.index].style.display="none";
	}
}
var rtn = document.getElementsByClassName("returnTop")[0];
window.onscroll = function (){
	if (document.body.scrollTop>=885) {
	rtn.style.opacity = 1;
	rtn.style.transition = "all .5s";
}else{
	rtn.style.opacity = 0;
	rtn.style.transition = "all .5s";
}
	console.log(document.body.scrollTop)
}
