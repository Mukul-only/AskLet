<%-- 
    Document   : SignupHandler
    Created on : 04-Dec-2022, 10:44:23 pm
    Author     : Mukul
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*"%>
<%

String fn=request.getParameter("f-name");
String ln=request.getParameter("l-name");
String em =request.getParameter("email");
String gen=request.getParameter("gender");
String DOB=request.getParameter("date");
String Pass=request.getParameter("password");


    try{        Class.forName("oracle.jdbc.driver.OracleDriver");
        Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","asklet","123");
        String qry="insert into asklet_user values(?,?,?,?,?,?)";
       PreparedStatement prestmt=con.prepareStatement(qry);
       prestmt.setString(1,fn);
       prestmt.setString(2,ln);
       prestmt.setString(3,em);
       prestmt.setString(4,gen);
       prestmt.setString(5, DOB);
       prestmt.setString(6,Pass);
      prestmt.executeUpdate();
      con.close();
      prestmt.close();
       response.sendRedirect("../login/login.html");
           }
    catch(Exception e)
            { out.println(e); } %>
