<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>include包含页面</title>
</head>
<body>
	<h1>这是包含页面</h1>
	<jsp:include page="include2.jsp">
		<jsp:param value="tomcat" name="name"/>
		<jsp:param value="12" name="age"/>
	</jsp:include>
	<br/>
	
	<h1>请求转发</h1>
	<form action="receive.jsp">
		<input type="text" name="email"/>
		<input type="submit" value="提交"/>
	</form>
	<%--创建对象，调用默认构造方法 --%>
	<h1>>useBean动作元素</h1>
	<jsp:useBean id="person" class="com.gqz.bean.Person">
	</jsp:useBean>
	<%--设置对象属性 --%>
	<jsp:setProperty property="name" name="person" value="小白"/>
	<jsp:setProperty property="age" name="person" value="17"/>
	<%--获取对象属性 --%>
	<jsp:getProperty property="name" name="person"/>
	<jsp:getProperty property="age" name="person"/>
</body>
</html>