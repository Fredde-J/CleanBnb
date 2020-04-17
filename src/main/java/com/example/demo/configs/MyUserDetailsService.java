package com.example.demo.configs;

import com.example.demo.entities.Address;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Configuration
public class MyUserDetailsService implements UserDetailsService {

  private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
  public BCryptPasswordEncoder getEncoder() { return encoder; }

  @Autowired
  private UserRepo userRepo;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepo.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException("User not found by name: " + username);
    }
    return toUserDetails(user);
  }


  public User addUser(String firstName, String lastName, String username, String password, Address address){
    User user = new User(firstName,lastName,username, encoder.encode(password),address);
    try {
      return userRepo.save(user);
    } catch (Exception ex) {
      ex.printStackTrace();
    }
    return null;
  }

  private UserDetails toUserDetails(User user) {
    return org.springframework.security.core.userdetails.User
            .withUsername(user.getUsername())
            .password(user.getPassword())
            .roles("USER").build();
  }
}
