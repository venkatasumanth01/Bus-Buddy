package com.busadmin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.busadmin.model.Bus;
import com.busadmin.repo.BusRepo;
import com.busadmin.service.BusService;

@RestController
@CrossOrigin("*")
public class BusController {
	
	@Autowired
    private BusRepo busRepository;
    
    @GetMapping("/buses")
    public ResponseEntity<List<Bus>> getBusesByOriginAndDestination(
            @RequestParam String origin,
            @RequestParam String destination) {
        
        List<Bus> buses = busRepository.findByOriginAndDestination(origin, destination);
        
        return new ResponseEntity<>(buses, HttpStatus.OK);
    }
    
	@Autowired
	private BusService service;
	
	@PostMapping("/save")
	public Bus save(@RequestBody Bus bus) {
		return service.saveBus(bus);
	}
	
	@GetMapping("/allBus")
	public List<Bus> allBus(){
		return service.getAllBus();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteRecord(@PathVariable int id) {
		return service.deleteById(id);
	}
	
	@GetMapping("/bus/{id}")
	public Bus getById(@PathVariable int id) {
		return service.getBus(id);
	}
}
