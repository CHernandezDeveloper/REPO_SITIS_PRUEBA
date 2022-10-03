package com.sitis.prueba.controllers;

import com.sitis.prueba.entities.UserB;
import com.sitis.prueba.services.UserBService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
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
    public ResponseEntity<UserB> registerUser(@RequestBody UserB userB){

        return this.userBService.addUser(userB);
    }
}
