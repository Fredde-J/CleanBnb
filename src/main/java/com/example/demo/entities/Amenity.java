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
    private Boolean Balkong;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean Wifi;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean TV;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean Badkar;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean Diskmaskin;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean Tvättmaskin;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean Kyl;
    @Column(nullable = false)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private Boolean Frys;

    public Amenity() {}

    public int getAmenityId() {
        return amenityId;
    }

    public void setAmenityId(int amenityId) {
        this.amenityId = amenityId;
    }

    public Boolean getBalkong() {
        return Balkong;
    }

    public void setBalkong(Boolean balkong) {
        Balkong = balkong;
    }

    public Boolean getWifi() {
        return Wifi;
    }

    public void setWifi(Boolean wifi) {
        Wifi = wifi;
    }

    public Boolean getTV() {
        return TV;
    }

    public void setTV(Boolean TV) {
        this.TV = TV;
    }

    public Boolean getBadkar() {
        return Badkar;
    }

    public void setBadkar(Boolean badkar) {
        Badkar = badkar;
    }

    public Boolean getDiskmaskin() {
        return Diskmaskin;
    }

    public void setDiskmaskin(Boolean diskmaskin) {
        Diskmaskin = diskmaskin;
    }

    public Boolean getTvättmaskin() {
        return Tvättmaskin;
    }

    public void setTvättmaskin(Boolean tvättmaskin) {
        Tvättmaskin = tvättmaskin;
    }

    public Boolean getKyl() {
        return Kyl;
    }

    public void setKyl(Boolean kyl) {
        Kyl = kyl;
    }

    public Boolean getFrys() {
        return Frys;
    }

    public void setFrys(Boolean frys) {
        Frys = frys;
    }
}
