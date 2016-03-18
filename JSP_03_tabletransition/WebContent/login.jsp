<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
function login(){
	var loginForm=document.forms["loginform"];
	loginForm.name.value= encodeURI(loginForm.name.value);
	alert(loginForm.name.value);
	loginForm.submit();
}

</script>
</head>
<body>

<form action="loginhandler.jsp" name="loginform"onsubmit="login()" method="get">
	user:<input type="text" name="name"/><br/>
	pwd:<input type="password" name="pwd"/><br/>
	<input type="submit" value="登陆"/><br/>
</form>
</body>
</html>