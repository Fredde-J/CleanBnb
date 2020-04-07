package com.example.demo.entities;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private  String startDate;
    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String endDate;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private  Residence residenceId;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private  User userId;


    public  Booking() {}

    public Booking(String startDate, String endDate, Residence residenceId, User userId) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.residenceId = residenceId;
        this.userId = userId;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Residence getResidenceId() {
        return residenceId;
    }

    public void setResidenceId(Residence residenceId) {
        this.residenceId = residenceId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }
}
