package com.example.demo.services;

import com.example.demo.entities.Address;
import com.example.demo.entities.Amenity;
import com.example.demo.entities.Residence;
import com.example.demo.entities.User;
import com.example.demo.repositories.AddressRepo;
import com.example.demo.repositories.AmenityRepo;
import com.example.demo.repositories.ResidenceRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    private ResidenceRepo residenceRepo;
    @Autowired
    private AddressRepo addressRepo;
    @Autowired
    private AmenityRepo amenityRepo;
    @Autowired
    private UserRepo userRepo;

    public List<Residence> getAllResidences() { return  (List<Residence>) residenceRepo.findAll(); }

    public Residence getResidence(int id) {
        return residenceRepo.findById(id);
    }

    public Residence createResidence(Residence residence) {

        Address address = addressRepo.findById(residence.addressId);
        Amenity amenity = amenityRepo.findById(residence.amenityId);
        User user = userRepo.findById(residence.userId);


        residence.setAddress(address);
        residence.setAmenity(amenity);
        residence.setUser(user);

        return residenceRepo.save(residence);
    }

}
