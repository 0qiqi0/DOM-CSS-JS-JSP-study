package com.gqz.dao.inpl;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.gqz.dao.TeacherDao;
import com.gqz.model1.Teacher;
import com.gqz.util.db.JdbcTemplate;
//dao�ӿڵ�ʵ����
public class TeacherDaoInpl implements TeacherDao {
	private JdbcTemplate jdbcTemplete;
	public TeacherDaoInpl(){
		 jdbcTemplete= new JdbcTemplate();
	}
	public void add(Teacher t) throws SQLException {
		String sql="insert into teacher(name,description,age) values(?,?,?)";
		jdbcTemplete.update(sql,t.getName(),t.getDesccription(),t.getAge());
	}
	public void delete(int tid) throws SQLException {
		String sql="delete from teacher where tid=?";
		jdbcTemplete.update(sql,tid);
	}
	public void update(Teacher t) throws SQLException {
		String sql="update teacher set name=?,description=?,age=?where tid=?";
		jdbcTemplete.update(sql,t.getName(),t.getDesccription(),t.getAge(),t.getTid());
	}
	public Teacher findById(int tid) throws SQLException {
		String sql="select tid,name,description,age from teacher where toid=?";
		return (Teacher)jdbcTemplete.query(sql,new ResultSetHandler(){
			public Object doHandler(ResultSet rs) throws SQLException{
				return null;
			}
		},tid);
	}
	public List<Teacher> findAll() throws SQLException {
		return null;
	}

}




