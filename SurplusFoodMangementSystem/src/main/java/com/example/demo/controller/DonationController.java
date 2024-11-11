package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.DonationEntity;
import com.example.demo.service.DonationService;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class DonationController {
	
	@Autowired
	public DonationService donationService;
	
	@PostMapping("/saveDonations")
	public ResponseEntity<?> saveDonations(@RequestBody DonationEntity donationEntity) {
		return donationService.saveDonation(donationEntity);
	}
	
	@GetMapping("/getDonationRequest")
	public ResponseEntity<?> getDonationRequest(@RequestParam DonationEntity.CategoryType categoryType) {		
		return donationService.getDonationRequestByCategory(categoryType);
	}
	
	@PutMapping("/updateDonationRequest/{id}")
	public ResponseEntity<?> updateDonationRequest(@PathVariable Long id, @RequestBody boolean isApproved) {	    
	    return donationService.updateDonationRequest(id, isApproved);
	}

}
