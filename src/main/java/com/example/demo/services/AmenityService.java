package com.example.demo.services;


import com.example.demo.entities.Address;
import com.example.demo.entities.Amenity;

import com.example.demo.repositories.AmenityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;






    @Service
    public class AmenityService {

        @Autowired
        private AmenityRepo amenityRepo;

        public List<Amenity> getAllAmenities() {return (List<Amenity>) amenityRepo.findAll();}

        public Amenity getAmenityById(int id) {return amenityRepo.findById(id);}

        public Amenity createAmenity (Amenity amenity){
            return amenityRepo.save(amenity);
        }

    }

