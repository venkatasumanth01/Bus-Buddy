package com.busadmin.model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class Bus {
	@Id
	private int bus_id;
	private String bus_name;
	private String duration;
	private String start_time;
	private String end_time;
	private String bus_type;
	private String origin;
	private String destination;
	private String boarding_point;
	private String dropping_point;
	private int price;
	private double rating;
	
	public Bus() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bus(int bus_id, String bus_name, String duration, String start_time, String end_time, String bus_type,
			String origin, String destination, String boarding_point, String dropping_point, int price, double rating) {
		super();
		this.bus_id = bus_id;
		this.bus_name = bus_name;
		this.duration = duration;
		this.start_time = start_time;
		this.end_time = end_time;
		this.bus_type = bus_type;
		this.origin = origin;
		this.destination = destination;
		this.boarding_point = boarding_point;
		this.dropping_point = dropping_point;
		this.price = price;
		this.rating = rating;
	}

	public int getBus_id() {
		return bus_id;
	}

	public void setBus_id(int bus_id) {
		this.bus_id = bus_id;
	}

	public String getBus_name() {
		return bus_name;
	}

	public void setBus_name(String bus_name) {
		this.bus_name = bus_name;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

	public String getBus_type() {
		return bus_type;
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
	
	public void setBus_type(String bus_type) {
		this.bus_type = bus_type;
	}

	public String getBoarding_point() {
		return boarding_point;
	}

	public void setBoarding_point(String boarding_point) {
		this.boarding_point = boarding_point;
	}

	public String getDropping_point() {
		return dropping_point;
	}

	public void setDropping_point(String dropping_point) {
		this.dropping_point = dropping_point;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Bus [bus_id=" + bus_id + ", bus_name=" + bus_name + ", duration=" + duration + ", start_time="
				+ start_time + ", end_time=" + end_time + ", bus_type=" + bus_type + ", origin=" + origin + ", destination=" + destination + ", boarding_point="
				+ boarding_point + ", dropping_point=" + dropping_point + ", price=" + price + ", rating=" + rating
				+ "]";
	}
	
	
	
	
}
