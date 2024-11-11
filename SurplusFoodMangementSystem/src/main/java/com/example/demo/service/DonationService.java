package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.DonationEntity;
import com.example.demo.model.UserEntity;
import com.example.demo.repository.DonationRepository;
import com.example.demo.repository.UserRepository;

@Service
public class DonationService {
	
	@Autowired
	public DonationRepository donationRepo;
	
	@Autowired
	public UserRepository userRepo;
	
	
	public ResponseEntity<?> saveDonation(DonationEntity donationEntity) {
		
		UserEntity check = userRepo.findByUserPhoneNumber(donationEntity.getMobileNumber());
		if(check != null) {
			donationEntity.setUserId(check.getUserId());
		}
		else {
			return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
		}
		
		if (donationEntity.getCategoryType() == null) {
	        return new ResponseEntity<>("Category type is required", HttpStatus.BAD_REQUEST);
	    }
		
		 switch (donationEntity.getCategoryType()) {
	        case FOOD:
	            if (donationEntity.getFoodDonationEntity() == null) {
	                return new ResponseEntity<>("Food donation details are required", HttpStatus.BAD_REQUEST);
	            }
	            break;

	        case FUND:
	            if (donationEntity.getFundDonationEntity() == null) {
	                return new ResponseEntity<>("Fund donation details are required", HttpStatus.BAD_REQUEST);
	            }
	            break;

	        case CLOTHES:
	            if (donationEntity.getClothDonationEntity() == null) {
	                return new ResponseEntity<>("Clothes donation details are required", HttpStatus.BAD_REQUEST);
	            }
	            break;

	        case FOOTWEAR:
	            if (donationEntity.getFootwearDonationEntity() == null) {
	                return new ResponseEntity<>("Footwear donation details are required", HttpStatus.BAD_REQUEST);
	            }
	            break;

	        case GROCERY:
	            if (donationEntity.getGroceryDonationEntity() == null) {
	                return new ResponseEntity<>("Grocery donation details are required", HttpStatus.BAD_REQUEST);
	            }
	            break;

	        case STATIONERY:
	            if (donationEntity.getStationeryDonationEntity() == null) {
	                return new ResponseEntity<>("Stationery donation details are required", HttpStatus.BAD_REQUEST);
	            }
	            break;

	        default:
	            return new ResponseEntity<>("Invalid category type", HttpStatus.BAD_REQUEST);
	    }
		
		donationRepo.save(donationEntity);		
		
		return new ResponseEntity<>("Donation saved successfully", HttpStatus.OK);
	}
	
	public ResponseEntity<List<DonationEntity>> getDonationRequestByCategory(DonationEntity.CategoryType categoryType) {
		List<DonationEntity> donationRequests = donationRepo.findByCategoryType(categoryType);
		if(donationRequests.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(donationRequests, HttpStatus.OK);
	}
	
	
	public ResponseEntity<?> updateDonationRequest(Long id,boolean isApproved) {
	    DonationEntity donation = donationRepo.findById(id).orElse(null);
	    if (donation == null) {
	        return new ResponseEntity<>("Donation ID not found", HttpStatus.BAD_REQUEST);
	    }
	    donation.setApproved(isApproved);
	    donationRepo.save(donation);
	    return ResponseEntity.ok().build();
	}


           
}