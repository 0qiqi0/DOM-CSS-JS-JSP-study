package com.gqz.model1;
/*����ģ�� */
public class Teacher {
	private String name;
	private String desccription;
	private int age;
	private int tid;
		
	public int getTid() {
		return tid;
	}
	public String getName() {
		return name;
	}
	public String getDesccription() {
		return desccription;
	}
	public int getAge() {
		return age;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	public void setDesccription(String desccription) {
		this.desccription = desccription;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}

	public Teacher(String name, String desccription, int age, int tid) {
		super();
		this.name = name;
		this.desccription = desccription;
		this.age = age;
		this.tid = tid;
	}
	public Teacher() {
		super();
	}	
	public Teacher(String desccription, int age, String name) {
		super();
		this.desccription = desccription;
		this.age = age;
		this.name = name;
	}
	
}
