package com.gqz.util.db;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ResourceBundle;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;
//���ݿ���������ࡣ����������ʵ�������õ������ģʽ�����߹��췽��˽�л�
public class DBUtils {
	public  static String URL; //="jdbc:mysql://localhost:3306/test"; //ÿ�����ݿⶼ������URL
	public  static String USERNAME; //="root";
	public  static String PASSWORD; //="";
	public  static String DRIVER; //="com.mysql.jdbc.Driver";
	
	private static ResourceBundle rb=ResourceBundle.getBundle("com.gqz.jdbcTool.db-config");
	private DBUtils(){}
	//��̬��ֻ������ص�ʱ��ִ��һ��.��������������
	static{
		URL=rb.getString("jdbc.url");
		USERNAME=rb.getString("jdbc.username");
		PASSWORD=rb.getString("jdbc.password");
		DRIVER=rb.getString("jdbc.driver");
		try {
			Class.forName(DRIVER);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	//����һ�����ݿ����ӷ���
	public static Connection getConnection(){
		Connection conn=null;
		try {
			conn=(Connection) DriverManager.getConnection(URL,USERNAME,PASSWORD);
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("��ȡ����ʧ��");
		}
		return conn;
	}
	//�ر����ݿ�����
	public static void close(ResultSet rs,Statement stat,Connection conn){
			try { 
				if(rs!=null) rs.close();
				if(stat!=null) stat.close(); 
				if(conn!=null) conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	public static void main(String[] args) {

	}

}