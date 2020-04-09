package com.example.demo.entities;


import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "availability")
public class Availability {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int period_id;

    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String startDate;

    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String endDate;

    @Transient
    public int residenceId;

    @ManyToOne(cascade = CascadeType.ALL)
    //@JoinColumn
    private Residence residence;

    public int getPeriod_id() {
        return period_id;
    }

    public void setPeriod_id(int period_id) {
        this.period_id = period_id;
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
}
