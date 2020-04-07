package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepo bookingRepo;

    public List<Booking> getAllBookings (){return (List<Booking>) bookingRepo.findAll();}

    public Booking registerBooking(Booking booking){
        return new Booking(booking.getStartDate(), booking.getEndDate(), booking.getResidenceId(), booking.getUserId());
    };
}
