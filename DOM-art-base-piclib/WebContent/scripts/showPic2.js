/**
 */
function showPic(whichPic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichPic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="img") return false;
	placeholder.setAttribute("src", source);
	if(document.getElementById("description")){
		var text=whichPic.getAttribute("title")? whichPic.getAttribute("title"):"";
		var description = document.getElementById("description");
		//description=setAttribute(description,text);
		//alert(description.childNodes[0].nodeValue);   //alert(description.firstChild.nodeValue);
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue=text;
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
	if(typeof window.onload !='function'){
		window.onload=func;
	}else{
		oldonload();
		func();
	}
}
function preparePlaceholder(){
	if(!document.createElement) reture false;
	if(!document.createTextNode) reture false;
	if(!document.getElementById("imagegallery")) reture false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");     //属性的创建，就直接set
	placeholder.setAttribute("src","images/IMG_3081.JPG");
	placeholder.setAttribute("alt","my image gallery");
	
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext=document.createTextNode("Choose a image");
	description.appendChild(desctext);	//容易忽略
	//document.getELementByTagName("body")[0].appendChild(placeholder);
	//document.getELementByTagName("body")[0].appendChild(description);
	
	//利用insertAfter()函数，注销上面两句	
	var gallery=document.getElementById("imagegallery");
	inserAfter(placeholder,gallery);
	inserAfter(description,placeholder);
}
//不需要care目标元素的子元素咋样，care父元素就好。
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(targetElement==parent.lastChild){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

