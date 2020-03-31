package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/auth/register")
  public User registerUser(@RequestBody User user) {
    return userService.registerUser(user);
  }

  @GetMapping("/auth/users")
  public List<User> getUsers() {return userService.getAllUsers();}

  @GetMapping("/auth/whoami")
  public User whoAmI() {
    return userService.findCurrentUser();
  }

}
