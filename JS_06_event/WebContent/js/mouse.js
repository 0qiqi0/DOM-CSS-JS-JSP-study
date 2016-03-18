//鼠标移动事件
function mouFun(){
	var img1=document.getElementById("img1");
	ff= img1.getAttribute("alt");
	document.getElementById("info").innerHTML=ff;
}
function mouFun1(){
	var img1=document.getElementById("img1");
	ff= img1.getAttribute("alt");
	document.getElementById("info1").innerHTML=ff;
}
function mouFun2(){
	document.getElementById("info1").innerHTML="";
	
}