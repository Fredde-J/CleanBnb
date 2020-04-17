package com.example.demo.repositories;

import com.example.demo.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Integer> {
  public User findByUsername(String username); // SELECT * FROM users WHERE username = ?

  public User findById(int id);
}
