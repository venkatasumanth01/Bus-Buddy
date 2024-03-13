package com.excelr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id
	private String email;
	private String username;
	private String password;
	private String conf_password;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}


	public User(String email, String username, String password, String conf_password) {
		super();
		this.email = email;
		this.username = username;
		this.password = password;
		this.conf_password = conf_password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getConf_password() {
		return conf_password;
	}


	public void setConf_password(String conf_password) {
		this.conf_password = conf_password;
	}


	@Override
	public String toString() {
		return "User [email=" + email + ", username=" + username + ", password=" + password + ", conf_password="
				+ conf_password + "]";
	}
	
	
	
	
}
