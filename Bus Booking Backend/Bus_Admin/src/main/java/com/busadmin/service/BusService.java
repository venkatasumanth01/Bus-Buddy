package com.busadmin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.busadmin.model.Bus;
import com.busadmin.repo.BusRepo;

@Service
public class BusService implements BusInterface {
	
	@Autowired
	private BusRepo repo;

	@Override
	public Bus saveBus(Bus bus) {
		// TODO Auto-generated method stub
		repo.save(bus);
		return bus;
	}

	@Override
	public List<Bus> getAllBus() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public String deleteById(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
		return "Deleted Successfully";
	}

	@Override
	public Bus getBus(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

}
