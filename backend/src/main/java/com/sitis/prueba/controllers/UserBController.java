package com.sitis.prueba.controllers;

import com.sitis.prueba.entities.UserB;
import com.sitis.prueba.services.UserBService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api")
public class UserBController {

    UserBService userBService;

    public UserBController(UserBService userBService){

        this.userBService = userBService;
    }

    @GetMapping("/users")
    public List<UserB> getAllUsers(){

        return this.userBService.getAllUsers();
    }

    @GetMapping("/users/{profile}")
    public List<UserB> getUsersByProfile(@PathVariable String profile){

        return this.userBService.getUsersByProfile(profile);
    }

    @PostMapping("/users")
    public ResponseEntity registerUser(@RequestBody UserB userB){

        return this.userBService.addUser(userB);
    }
}
