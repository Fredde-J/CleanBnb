package com.example.demo.controllers;

import com.example.demo.entities.Residence;
import com.example.demo.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResidenceController {

    @Autowired
    private ResidenceService residenceService;

    @GetMapping("/rest/residences")
    public List<Residence> getAllResidences() {
        return residenceService.getAllResidences();
    }

    @GetMapping("/rest/residences/{id}")
    public Residence getResidence(@PathVariable int id) {
        return residenceService.getResidence(id);
    }

    @PostMapping("/rest/residences")
    public Residence createResidence(@RequestBody Residence residence){
        return residenceService.createResidence(residence);
    }

}
