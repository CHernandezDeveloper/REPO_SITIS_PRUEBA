package com.sitis.prueba.repositories;

import com.sitis.prueba.entities.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile,Long> {

    Profile findByName(String name);
}
