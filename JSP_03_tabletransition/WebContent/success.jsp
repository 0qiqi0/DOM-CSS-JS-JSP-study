<%@ page import="java.net.URLDecoder" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>登陆成功</h2>
	<%
	String name=request.getParameter("name");
	//name=new String(name.getBytes("iso-8859-1"),"utf-8");
	name=URLDecoder.decode(name,"utf-8");
	%>
	欢迎你<%=name%>
</body>
</html>