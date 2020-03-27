package com.example.demo.entities;
import javax.persistence.*;

@Entity
@Table(name = "residences")
public class Residence_v2 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int residenceId;

    private  Integer size;
    private Integer rooms;
    private Integer beds;
    private String images;
    @JoinColumn
    private Integer amenityProfileId;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Address addressId;
    @JoinColumn
    private Integer userId;

    private Boolean balcony;
    private Boolean wifi;
    private Boolean tv;
    private Boolean bathtub;
    private Boolean dishwasher;
    private Boolean washing_machine;
    private Boolean fridge;
    private Boolean freezer;
    private String address;

    public Residence_v2() {}


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

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

    public Integer getAmenityProfileId() {
        return amenityProfileId;
    }

    public void setAmenityProfileId(Integer amenityProfileId) {
        this.amenityProfileId = amenityProfileId;
    }

    public Address getAddressId() {
        return addressId;
    }

    public void setAddressId(Address addressId) {
        this.addressId = addressId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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
