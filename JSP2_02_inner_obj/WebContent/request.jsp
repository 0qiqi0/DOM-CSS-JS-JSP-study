<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="request_receive.jsp" method="post" >
		user：<input type="text" name="user"/><br/>
		pwd:<input type="password" name="pwd"/><br/>
		<input type="checkbox" name="likes" value="睡觉">睡觉
		<input type="checkbox" name="likes" value="吃饭">吃饭
		<input type="checkbox" name="likes" value="打游戏">打游戏<br/>
		
		
		
		<input type="submit" value="登录"/><br/>
	</form>
	<h2>登录表单session的使用</h2>
	<form action="session.jsp" method="post" >
		user：<input type="text" name="name"/><br/>
		pwd:<input type="password" name="pwd"/><br/>	
		<input type="submit" value="登录2"/><br/>
	</form>
	
	<h2>pageContext对象</h2>
	<%
		//通过pageContext上下文对象获取当前页面的其他内置对象 
		pageContext.getRequest();
		pageContext.getOut();
		String path=request.getContextPath();
		out.println(path);
	%>
	
	<h2>application对象</h2>
	<%
		//获取应用程序的根路径
		String serverpath=application.getContextPath();
		out.println(serverpath);
		//也可以添加数据，任何页面都能调用application.setAttribute(arg0, arg1)
	%>
</body>
</html>