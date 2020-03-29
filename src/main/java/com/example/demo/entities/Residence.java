package com.example.demo.entities;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "residences")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int residenceId;

    private Integer size;
    private Integer rooms;
    private Integer beds;
    private String images;
    private Integer price;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Amenity amenity;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Address address;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private User user;

    public Residence() {}

    public int getResidenceId() {
        return residenceId;
    }

    public void setResidenceId(int residenceId) {
        this.residenceId = residenceId;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public Integer getBeds() {
        return beds;
    }

    public void setBeds(Integer beds) {
        this.beds = beds;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public Integer getPrice() { return price; }

    public void setPrice(Integer price) { this.price = price; }

    public Amenity getAmenity() {
        return amenity;
    }

    public void setAmenity(Amenity amenity) {
        this.amenity = amenity;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
