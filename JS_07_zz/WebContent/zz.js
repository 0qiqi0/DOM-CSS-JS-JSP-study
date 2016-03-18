function fun1(){
	var age=document.getElementById("age").value;
	if(/^[0-9]{1,3}$/.test(age)){
		document.getElementById("info").innerHTML="年龄合法";
	}else{
		document.getElementById("info").innerHTML="请输入1-3位的数字";
	}
}