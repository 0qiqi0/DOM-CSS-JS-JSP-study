function posMes(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var ele=document.getElementById("message");
	ele.style.position="absolute";
	/*ele.style.left="50px";
	ele.style.right="100px";*/  //left，right同时用错误。
	ele.style.left="50px";
	ele.style.top="100px"; 
	movement=setTimeout("moveMessage()",5000);
}

function moveMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var ele=document.getElementById("message");
	ele.style.left="200px";
}
function addEvent(func){ 
	var oldLoad=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldLoad();
			func();
		}
	}
}
addEvent(posMes);
