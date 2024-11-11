package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.FootwearDonationEntity;

public interface FootwearDonationRepository extends JpaRepository<FootwearDonationEntity, Long> {
	
}