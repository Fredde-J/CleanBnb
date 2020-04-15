package com.example.demo.entities;


import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "availability")
public class Availability {

    @Transient
    public int residenceId;

    public int getPeriodId() {
        return periodId;
    }

    public void setPeriodId(int periodId) {
        this.periodId = periodId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int periodId;

    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String startDate;

    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private String endDate;
    
    @OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn
    private Residence residence;

    public Availability() {}

    public int getResidenceId() {
        return residenceId;
    }

    public void setResidenceId(int residenceId) {
        this.residenceId = residenceId;
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
