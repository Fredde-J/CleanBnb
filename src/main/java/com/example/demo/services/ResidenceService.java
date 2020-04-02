package com.example.demo.services;

import com.example.demo.entities.Residence;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    private ResidenceRepo residenceRepo;

    public List<Residence> getAllResidences() { return  (List<Residence>) residenceRepo.findAll(); }

    public Residence getResidence(int id) {
        return residenceRepo.findById(id);
    }

    public Residence createResidence(Residence residence) { return residenceRepo.save(residence);}

}
