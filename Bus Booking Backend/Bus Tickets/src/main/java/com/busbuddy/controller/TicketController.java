package com.busbuddy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.busbuddy.model.Tickets;
import com.busbuddy.service.TicketService;


@RestController
@CrossOrigin("*")
public class TicketController {
	
	@Autowired
	private TicketService service;
	
	@PostMapping("/save")
	public String save(@RequestBody Tickets tickets)
	{
		return service.saveTickets(tickets);
	}
	
	@GetMapping("/allTickets")
	public List<Tickets> allTickets()
	{
		return service.getAllTickets();	
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteRecord(@PathVariable long id) {
		return service.deleteById(id);
	}
	
	@GetMapping("/ticket/{id}")
	public Tickets getById(@PathVariable long id) {
		return service.getTickets(id); 
	}

}
