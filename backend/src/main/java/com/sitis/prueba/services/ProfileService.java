package com.sitis.prueba.services;

import com.sitis.prueba.entities.Profile;
import com.sitis.prueba.repositories.ProfileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    private final Logger logger = LoggerFactory.getLogger(Profile.class);
    private ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository){
        this.profileRepository = profileRepository;
    }

    public ResponseEntity addProfile(Profile profile){
        logger.info("Start method add profile");

        if(this.profileRepository.findByName(profile.getName()) == null && profile.getName() != null){
            this.profileRepository.save(profile);
            logger.info("Profile added");

            return ResponseEntity.ok("Profile added");
        }
        logger.info("Profile already exists");

        return ResponseEntity.badRequest().build();
    }

    public List<Profile> getAllProfiles(){
        return this.profileRepository.findAll();
    }
}
