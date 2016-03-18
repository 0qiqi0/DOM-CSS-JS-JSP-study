<%
	//获取请求数据
	request.setCharacterEncoding("UTF-8");
	String name=request.getParameter("user");
	String pwd=request.getParameter("pwd");

	if("xb".equals(name)&&"123".equals(pwd)){
		//out.print("登陆成功");
		request.getRequestDispatcher("request-success.jsp").forward(request, response);
	}else{
		out.print("error");
	}
%>