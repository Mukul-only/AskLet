<%-- 
    Document   : loginhandler
    Created on : 04-Dec-2022, 11:32:17 pm
    Author     : Mukul
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.sql.*" %>
<%String login=request.getParameter("user_id");
     String pass=request.getParameter("password");
   
     
    
    try
            {  
        Class.forName("oracle.jdbc.driver.OracleDriver");
        Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","asklet","123");
     Statement stmt=con.createStatement();
     String qry="select * from asklet_user";
     ResultSet rs=stmt.executeQuery(qry);
     while(rs.next())
         { String dbid=rs.getString("email");
         String dbpass=rs.getString("pass");
         String dfname=rs.getString("fname");
         
         if(login.equals(dbid) && pass.equals(dbpass) )
             {

response.sendRedirect("../user/user.jsp?name="+dfname);
} }
      
        

        %><h1>Invaild Id / Passowrd</h1><% }
    catch(Exception e)  {    }%>
