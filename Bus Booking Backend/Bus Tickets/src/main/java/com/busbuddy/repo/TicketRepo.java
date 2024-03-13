package com.busbuddy.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.busbuddy.model.Tickets;

@Repository
public interface TicketRepo extends JpaRepository<Tickets, Long> {

}
