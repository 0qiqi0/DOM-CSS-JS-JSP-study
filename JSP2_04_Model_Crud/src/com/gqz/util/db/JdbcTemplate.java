package com.gqz.util.db;
import java.sql.SQLException;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
public class JdbcTemplate {
	//��ɾ�ĵĳ���
	public int update(String sql,Object...args){
		Connection conn =null;
		PreparedStatement ps=null;
		try{
			conn=DBUtils.getConnection();
			ps=(PreparedStatement) conn.prepareStatement(sql);
			//����ռλ���Ĳ���
			if(args!=null){
				for(int i=0; i<args.length;i++){
					ps.setObject(i+1, args[i]);
				}
			}
			return ps.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
			return -1;
		}finally{
			DBUtils.close(null, ps, conn);
		}
	}
}