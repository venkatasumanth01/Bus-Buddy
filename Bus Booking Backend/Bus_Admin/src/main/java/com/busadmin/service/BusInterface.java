package com.busadmin.service;

import java.util.List;

import com.busadmin.model.Bus;

public interface BusInterface {
	public Bus saveBus(Bus bus);
	public List<Bus> getAllBus();
	public String deleteById(int id);
	public Bus getBus(int id);
}
