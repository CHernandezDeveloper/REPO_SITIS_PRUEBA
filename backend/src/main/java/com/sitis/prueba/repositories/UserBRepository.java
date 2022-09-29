package com.sitis.prueba.repositories;

import com.sitis.prueba.entities.UserB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserBRepository extends JpaRepository<UserB,Long> {

    List<UserB> findByProfile(String profile);

    UserB findByEmail(String email);

    UserB findByUserName(String userName);
}
