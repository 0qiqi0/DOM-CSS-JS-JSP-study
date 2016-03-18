<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="request-receiver.jsp" method="post">
		user:<input type="text" name="user"/><br/>
		pwd:<input type="password" name="pwd"/><br/>
		<input type="submit" value="登陆"/>
	</form>
	<h2>登录表单 session的使用</h2>
	<form action="session.jsp" method="post">
		user:<input type="text" name="user"/><br/>
		pwd:<input type="password" name="pwd"/><br/>
		<input type="submit" value="登陆"/>
	</form>
</body>
</html>