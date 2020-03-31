package com.example.demo.repositories;

import com.example.demo.entities.Residence;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResidenceRepo extends CrudRepository<Residence, Integer> {

    public Residence findById(int id);

}
