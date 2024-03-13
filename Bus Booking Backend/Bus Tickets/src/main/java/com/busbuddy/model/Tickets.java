package com.busbuddy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tickets {
	
	@Id
	private long ticket_id;
	private String bus_name;
	private String origin;
	private String destination;
	private String user_name;
	private String user_mobile;
	private String user_email;
	private int total_tickets;
	public Tickets() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Tickets(long ticket_id, String bus_name, String origin, String destination, String user_name,
			String user_mobile, String user_email, int total_tickets) {
		super();
		this.ticket_id = ticket_id;
		this.bus_name = bus_name;
		this.origin = origin;
		this.destination = destination;
		this.user_name = user_name;
		this.user_mobile = user_mobile;
		this.user_email = user_email;
		this.total_tickets = total_tickets;
	}
	public long getTicket_id() {
		return ticket_id;
	}
	public void setTicket_id(long ticket_id) {
		this.ticket_id = ticket_id;
	}
	public String getBus_name() {
		return bus_name;
	}
	public void setBus_name(String bus_name) {
		this.bus_name = bus_name;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getUser_mobile() {
		return user_mobile;
	}
	public void setUser_mobile(String user_mobile) {
		this.user_mobile = user_mobile;
	}
	public String getUser_email() {
		return user_email;
	}
	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}
	public int getTotal_tickets() {
		return total_tickets;
	}
	public void setTotal_tickets(int total_tickets) {
		this.total_tickets = total_tickets;
	}
	@Override
	public String toString() {
		return "Tickets [ticket_id=" + ticket_id + ", bus_name=" + bus_name + ", origin=" + origin + ", destination="
				+ destination + ", user_name=" + user_name + ", user_mobile=" + user_mobile + ", user_email="
				+ user_email + ", total_tickets=" + total_tickets + "]";
	}
	
	
	
}
