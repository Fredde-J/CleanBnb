package com.example.demo.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private MyUserDetailsService myUserDetailsService;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
            .csrf().disable()
            .cors().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.GET, "/").permitAll()
            .antMatchers(HttpMethod.GET, "/uploads/**").permitAll()
            .antMatchers(HttpMethod.GET,  "/rest/**").permitAll()
            .antMatchers( "/rest/**").authenticated()
            .antMatchers("/auth/**").permitAll()
            .and()
            .formLogin()
            .loginPage("/login")
    ;
  }

  @Override
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth
            .userDetailsService(myUserDetailsService)
            .passwordEncoder(myUserDetailsService.getEncoder());
  }

//  @Override
//  public void configure(WebSecurity web) throws Exception {
//    web.ignoring().antMatchers("/uploads/**");
//  }
}