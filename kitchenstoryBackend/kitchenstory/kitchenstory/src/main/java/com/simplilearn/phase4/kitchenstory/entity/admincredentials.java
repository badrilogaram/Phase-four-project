package com.simplilearn.phase4.kitchenstory.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admincredentials")
public class admincredentials 
{
	@Id
	@GeneratedValue
	@Column(name = "loginid")
	private long loginid;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "pword")
	private String pword;
	
	@Column(name = "accountstatus")
	private String accountstatus;
	
	public admincredentials()
	{
		
	}

	public admincredentials(String username, String pword, String accountstatus) {
		super();
		this.username = username;
		this.pword = pword;
		this.accountstatus = accountstatus;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPword() {
		return pword;
	}

	public void setPword(String pword) {
		this.pword = pword;
	}

	public String getAccountstatus() {
		return accountstatus;
	}

	public void setAccountstatus(String accountstatus) {
		this.accountstatus = accountstatus;
	}

	public long getLoginid() {
		return loginid;
	}

	@Override
	public String toString() {
		return "admincredentials [loginid=" + loginid + ", username=" + username + ", pword=" + pword
				+ ", accountstatus=" + accountstatus + "]";
	}
	
}
