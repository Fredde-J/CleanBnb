package com.example.demo.services;

import com.example.demo.entities.Availability;
import com.example.demo.repositories.AvailabilityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailabilityService {

    @Autowired
    private AvailabilityRepo availabilityRepo;

    public List<Availability> getAllAvailablePeriods(){return (List<Availability>) availabilityRepo.findAll();}

    public Availability getOneAvailablePeriod(int id){return availabilityRepo.findById(id);}
}
