package com.example.demo.services;

import com.example.demo.entities.Residence;
import com.example.demo.entities.Availability;
import com.example.demo.repositories.AvailabilityRepo;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailabilityService {

    @Autowired
    private AvailabilityRepo availabilityRepo;
    @Autowired
    private ResidenceRepo residenceRepo;

    public List<Availability> getAllAvailablePeriods(){return (List<Availability>) availabilityRepo.findAll();}

    public Availability getOneAvailablePeriod(int id){return availabilityRepo.findByResidenceResidenceId(id);}

    public Availability createAvailability(Availability availability) {

        Residence residence = residenceRepo.findById(availability.residenceId);
        availability.setResidence(residence);

        return availabilityRepo.save(availability);
    }
}
