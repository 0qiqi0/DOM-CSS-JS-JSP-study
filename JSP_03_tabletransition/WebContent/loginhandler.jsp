<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//request.setCharacterEncoding("utf-8");
	String name =request.getParameter("name");
 	String pwd=request.getParameter("pwd");
 	
 	if(!"".equals(name)&&!"".equals(pwd)){
 		//登陆成功
 		request.getRequestDispatcher("success.jsp").forward(request,response);
 	}else{
 		response.sendRedirect("error.jsp");
 		//登录失败
 	}
 %>