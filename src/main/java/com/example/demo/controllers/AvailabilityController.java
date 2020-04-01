package com.example.demo.controllers;

import com.example.demo.entities.Availability;
import com.example.demo.repositories.AvailabilityRepo;
import com.example.demo.services.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AvailabilityController {

    @Autowired
    private AvailabilityService availabilityService;

    @GetMapping("/rest/availability")
    public List<Availability> getAllAvailablePeriods(){return availabilityService.getAllAvailablePeriods();}

    @GetMapping("/rest/availability/{id}")
    public Availability getOneAvailablePeriod(@PathVariable int id){ return availabilityService.getOneAvailablePeriod(id);}
}
