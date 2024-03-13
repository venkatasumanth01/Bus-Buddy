package com.busadmin.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.busadmin.model.Bus;

@Repository
public interface BusRepo extends JpaRepository<Bus, Integer> {
	List<Bus> findByOriginAndDestination(String origin, String destination);
}
