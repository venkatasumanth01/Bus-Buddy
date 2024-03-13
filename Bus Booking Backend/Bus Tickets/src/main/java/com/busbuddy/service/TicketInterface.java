package com.busbuddy.service;

import java.util.List;

import com.busbuddy.model.Tickets;

public interface TicketInterface {
	
	public String saveTickets(Tickets tickets);
	
	public List<Tickets> getAllTickets();
	
	public String deleteById(long id);
	
	public Tickets getTickets(long id);

}
