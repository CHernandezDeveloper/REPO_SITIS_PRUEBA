package com.sitis.prueba.services;

import com.sitis.prueba.entities.UserB;
import com.sitis.prueba.repositories.UserBRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserBService {

    private final Logger logger = LoggerFactory.getLogger(UserBService.class);
    private UserBRepository userBRepository;

    public UserBService(UserBRepository userBRepository){

        this.userBRepository = userBRepository;

    }

    /**
     * Metodo que agrega un usuario que no existe en al bd
     * @param userB Usuario que se quiere agregar
     * @return ResponseEntity indicado el resultado de la operacion
     */
    public ResponseEntity addUser(UserB userB){
        logger.info("Start method add user");

        if(this.userBRepository.findByUserName(userB.getUserName()) == null
                && this.userBRepository.findByEmail(userB.getEmail()) == null){

            this.userBRepository.save(userB);
            logger.info("User registered in our bd");
            return ResponseEntity.ok("User registered");
        }
        logger.warn("User already exists in our bd");
        return ResponseEntity.badRequest().build();
    }

    /**
     * Metodo para buscar todos los usuarios que hay en la bd
     * @return Retorna una lista con todos los usuarios que hay en la bd
     */
    public List<UserB> getAllUsers(){

        logger.info("Start search of all users");
        return this.userBRepository.findAll();
    }

    /**
     * Metodo que se encarga de buscar usuarios dependiendo del perfil
     * @param profile Parametro que indica el perfil por el cual se quieren buscar los usuarios
     * @return Lista con los usuarios que tiene el perfil que se ha pasado como parametro
     */
    public List<UserB> getUsersByProfile(String profile){

        logger.info("Start search of users by profile");
        return this.userBRepository.findByProfile(profile);
    }


}
