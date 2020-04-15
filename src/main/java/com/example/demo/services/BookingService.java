package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Residence;
import com.example.demo.entities.User;
import com.example.demo.repositories.BookingRepo;
import com.example.demo.repositories.ResidenceRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ResidenceRepo residenceRepo;

    public List<Booking> getAllBookings (){return (List<Booking>) bookingRepo.findAll();}

    public Booking registerBooking(Booking booking){
        User user = userRepo.findById(booking.userId);
        Residence residence= residenceRepo.findById(booking.residenceId);

        booking.setUser(user);
        booking.setResidence(residence);

        return bookingRepo.save(booking);

    };
}
