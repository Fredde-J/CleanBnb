package com.example.demo.repositories;
import com.example.demo.entities.Amenity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface AmenityRepo extends CrudRepository<Amenity, Integer> {

    public Amenity findById(int id);

}

