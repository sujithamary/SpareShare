package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.StationeryDonationEntity;

public interface StationeryDonationRepository extends JpaRepository<StationeryDonationEntity, Long> {
	
}