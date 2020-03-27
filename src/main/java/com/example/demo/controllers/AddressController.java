package com.example.demo.controllers;

import com.example.demo.entities.Address;
import com.example.demo.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/rest/addresses")
    public List<Address> getAllAddresses() { return addressService.getAllAddresses();}
}
