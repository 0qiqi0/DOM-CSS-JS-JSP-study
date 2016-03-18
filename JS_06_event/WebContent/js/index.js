function onFocus(){
	document.getElementById("name_info").innerHTML="请输入姓名";
}
function onblurfun(){
	document.getElementById("name_info").innerHTML="";
}
function check(){
	//document.getElementById("likes")
	var _myform=document.forms["myform"];
	var _likes=_myform.likes;
	var s = "" ;
	for(var i=0;i<_likes.length;i++){
		if(_likes[i].checked){
			s=s+_likes[i].value+",";
		}
	}
	alert(s);
}

function radiofun(){
	var _myform=document.forms["myform"];
	var _sex=_myform.sex;
	//alert(sex_value.length);
	//alert(sex_value);//单选按钮的事件
	for(var  i=0;i<_sex.length;i++){
		if(_sex[i].checked){
			alert(_sex[i].value);
			break;		
		}
		
	}
}
function selefun(){
	
	var myform=document.forms["myform"];
	var _city=myform.city;
	//alert(_city.value);
	var _options=_city.options;
	for(var i=0;i<_city.length;i++){
		alert(_options[i].value);
	}

}