package com.sitis.prueba.controllers;

import com.sitis.prueba.entities.Profile;
import com.sitis.prueba.services.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProfileController {

    private ProfileService service;

    public ProfileController(ProfileService service){
        this.service = service;
    }

    @PostMapping("/profiles")
    public ResponseEntity addProfile(@RequestBody Profile profile){

        return this.service.addProfile(profile);
    }

    @GetMapping("/profiles")
    public List<Profile> getAllProfiles(){
        return this.service.getAllProfiles();
    }

}
