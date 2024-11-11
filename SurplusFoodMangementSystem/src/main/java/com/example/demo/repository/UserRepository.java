package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer>{
		UserEntity findByUserEmail(String userEmail);
		UserEntity findByUserPhoneNumber(String userPhoneNumber);
}
