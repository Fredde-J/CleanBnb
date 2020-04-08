package com.example.demo.controllers;

import com.example.demo.entities.Amenity;
import com.example.demo.services.AmenityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AmenityController {

    @Autowired
    private AmenityService amenityService;

    @GetMapping("/rest/amenities")
    public List<Amenity> getAllAmenities() { return amenityService.getAllAmenities();}

    @PostMapping("/rest/amenities")
    public Amenity createAmenity(@RequestBody Amenity amenity){
        return amenityService.createAmenity(amenity);
    }
}
