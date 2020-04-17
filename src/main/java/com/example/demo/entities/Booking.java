package com.example.demo.entities;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    private  String startDate;
    private String endDate;
    private int price;

    @Transient
    public int residenceId;

    @Transient
    public int userId;


    @OneToOne(cascade = CascadeType.ALL)
    private  Residence residence;
    @OneToOne(cascade = CascadeType.ALL)
    private  User user;

    public Booking(String startDate, String endDate, int residenceId, int userId, int price) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.residenceId = residenceId;
        this.userId = userId;
        this.price = price;
    }

    public Booking() {}

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
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

    public Residence getResidence() {
        return residence;
    }

    public void setResidence(Residence residence) {
        this.residence = residence;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}


