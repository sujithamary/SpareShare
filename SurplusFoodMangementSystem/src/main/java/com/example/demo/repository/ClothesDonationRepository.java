package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.ClothesDonationEntity;

public interface ClothesDonationRepository extends JpaRepository<ClothesDonationEntity, Long> {
}