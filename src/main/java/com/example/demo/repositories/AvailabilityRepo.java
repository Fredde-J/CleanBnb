package com.example.demo.repositories;

import com.example.demo.entities.Availability;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvailabilityRepo extends CrudRepository<Availability, Integer> {
    public Availability findById(int id);

    public Availability findByResidenceResidenceId(int id);
}
