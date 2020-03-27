package com.example.demo.entities;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "amenity")
public class Amenity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int amenityId;

    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean balcony;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean wifi;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean tv;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean bathtub;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean dishwasher;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean washing_machine;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean fridge;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean freezer;

    public Amenity() {}

    public int getAmenityId() {
        return amenityId;
    }

    public void setAmenityId(int amenityId) {
        this.amenityId = amenityId;
    }

    public Boolean getBalcony() {
        return balcony;
    }

    public void setBalcony(Boolean balcony) {
        this.balcony = balcony;
    }

    public Boolean getWifi() {
        return wifi;
    }

    public void setWifi(Boolean wifi) {
        this.wifi = wifi;
    }

    public Boolean getTv() {
        return tv;
    }

    public void setTv(Boolean tv) {
        this.tv = tv;
    }

    public Boolean getBathtub() {
        return bathtub;
    }

    public void setBathtub(Boolean bathtub) {
        this.bathtub = bathtub;
    }

    public Boolean getDishwasher() {
        return dishwasher;
    }

    public void setDishwasher(Boolean dishwasher) {
        this.dishwasher = dishwasher;
    }

    public Boolean getWashing_machine() {
        return washing_machine;
    }

    public void setWashing_machine(Boolean washing_machine) {
        this.washing_machine = washing_machine;
    }

    public Boolean getFridge() {
        return fridge;
    }

    public void setFridge(Boolean fridge) {
        this.fridge = fridge;
    }

    public Boolean getFreezer() {
        return freezer;
    }

    public void setFreezer(Boolean freezer) {
        this.freezer = freezer;
    }
}
