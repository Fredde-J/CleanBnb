package com.example.demo.services;

import com.example.demo.configs.MyUserDetailsService;
import com.example.demo.entities.Residence;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import com.sun.xml.bind.api.Bridge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

  @Autowired
  private UserRepo userRepo;
  @Autowired
  private MyUserDetailsService myUserDetailsService;

  public User findCurrentUser() {
    String email = SecurityContextHolder.getContext().getAuthentication().getName();

    System.err.println(email);

    return userRepo.findByEmail(email);
  }

  public List<User> getAllUsers() { return  (List<User>) userRepo.findAll(); }

  public User registerUser(User user) {
    return myUserDetailsService.addUser(user.getFirstName(),user.getLastName(),user.getEmail(), user.getPassword(),user.getAddress());
  }

}
