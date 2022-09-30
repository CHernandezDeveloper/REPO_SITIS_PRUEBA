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

    /**
     * Metodo para agregar un perfil a nuestra bd
     * @param profile Varible del tipo perfil que se pretende agregar
     * @return ResponseEntity con la respuesta de la request
     */
    public ResponseEntity addProfile(Profile profile){
        this.logger.info("Start method add profile");

        if(this.profileRepository.findByName(profile.getName()) == null && profile.getName() != null){
            this.profileRepository.save(profile);
            this.logger.info("Profile added");

            return ResponseEntity.ok("Profile added");
        }
        this.logger.warn("Profile already exists");

        return ResponseEntity.badRequest().build();
    }

    /**
     * Metodo para traer todos los perfiles de la bd
     * @return Lista con los perfiles que se encuentran en la bd
     */
    public List<Profile> getAllProfiles(){
        this.logger.info("Star method get all profiles");
        return this.profileRepository.findAll();
    }
}
