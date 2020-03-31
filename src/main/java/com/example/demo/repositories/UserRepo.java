package com.example.demo.repositories;

import com.example.demo.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Integer> {
  public User findByEmail(String email); // SELECT * FROM users WHERE username = ?
}
