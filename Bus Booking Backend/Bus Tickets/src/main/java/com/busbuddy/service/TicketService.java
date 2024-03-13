package com.busbuddy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.busbuddy.model.Tickets;
import com.busbuddy.repo.TicketRepo;

@Service
public class TicketService implements TicketInterface {
	
	@Autowired
	private TicketRepo repo;

	@Override
	public String saveTickets(Tickets tickets) {
		// TODO Auto-generated method stub
		repo.save(tickets);
		return "Success";
	}

	@Override
	public List<Tickets> getAllTickets() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public String deleteById(long id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
		return "deleted record";
	}

	@Override
	public Tickets getTickets(long id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

}
