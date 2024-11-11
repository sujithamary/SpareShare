package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.DonationEntity;

public interface DonationRepository extends JpaRepository<DonationEntity, Long> {
	List<DonationEntity> findByCategoryType(DonationEntity.CategoryType categoryType);
}
