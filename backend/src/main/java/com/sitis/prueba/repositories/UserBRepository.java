package com.sitis.prueba.repositories;

import com.sitis.prueba.entities.UserB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBRepository extends JpaRepository<UserB,Long> {

    UserB findByProfile(String profile);
}
