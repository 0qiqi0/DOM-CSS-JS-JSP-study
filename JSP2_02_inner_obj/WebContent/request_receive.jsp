<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//获取请求参数
	request.setCharacterEncoding("UTF-8");
	String name=request.getParameter("user");
	String pwd=request.getParameter("pwd");
	System.out.println(name+","+pwd);
	
	String likes[]=request.getParameterValues("likes");
	for(int i=0;i<likes.length;i++){
		System.out.println(likes[i]);
	}
	
	if("xb".equals(name)&&"123".equals(pwd)){
		//out.println("登录成功");
		request.setAttribute("sex","男"); //此为还有一些其他参数要带到request_success.jsp
		request.getRequestDispatcher("request_success.jsp").forward(request,response);
	}else
		//out.println("登录失败");
		response.setCharacterEncoding("UTF-8");
		//设置内笼类型
		response.setContentType("text/html; charset=UTF-8");
		response.sendRedirect("request_response.jsp");

%>
