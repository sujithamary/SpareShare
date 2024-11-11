package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.GroceryDonationEntity;

public interface GroceryDonationRepository extends JpaRepository<GroceryDonationEntity, Long> {
	
}