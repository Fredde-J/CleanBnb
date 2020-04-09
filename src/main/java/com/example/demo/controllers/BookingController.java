package com.example.demo.controllers;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/rest/bookings")
    public List<Booking> getAllBookings (){return bookingService.getAllBookings();}
    
    @PostMapping("/rest/bookings")
    public Booking registerBooking(@RequestBody Booking booking){
        return bookingService.registerBooking(booking);
    }


}
