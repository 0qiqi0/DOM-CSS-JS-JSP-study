/**
 */
function showPic(whichPic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichPic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src", source);
	if(document.getElementById("description")){
		var text=whichPic.getAttribute("title")? whichPic.getAttribute("title"):"";
		var description = document.getElementById("description");
		//description=setAttribute(description,text);
		//alert(description.childNodes[0].nodeValue);   //alert(description.firstChild.nodeValue);
		if(description.childNodes[0].nodeType==3){
			description.childNodes[0].nodeValue=text;
		}
		
	}
	return true;
}
function countBodyChildern(){
	var body_elment=document.getElementsByTagName("body")[0];
	alert(body_elment.childNodes.length);
	alert(body_elment.nodeType);
}
//window.onload=countBodyChildern();
/*
function popUp(winURL){
	window.open(winURL,"popup","width=600,height=600");    //<a href="http://www.baidu.com" onclick="popUp(this.href);return false;">Qingdao4</a>
}
*/
//对showPic进行改进，做对象检测，将js分离
function prepareGallery(){
	if(!document.getElementById) return false;
	//if(!getAttribute) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	
	var gallery=document.getElementById("imagegallery");
	var link= gallery.getElementsByTagName("a");
	for(var i=0;i<link.length;i++){
		link[i].onclick=function(){
			return !showPic(this);
		}
		//link[i].onkeypress=link[i].onclick;
	}
}
/*window.onload=function(){
	prepareGallery();
}*/
//共享onload事件
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof oldload!='function'){
		window.onload=func;
	}else{
		oldonload();
		func();
	}
}
addLoadEvent(prepareGallery);
