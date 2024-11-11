package com.example.demo.model;

import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "donationsTable")
public class DonationEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	private long userId;
    private String username;
    private String mobileNumber;    
    private boolean isApproved;
    
    @Enumerated(EnumType.STRING)
    private CategoryType categoryType;
    
    @Enumerated(EnumType.STRING)
    private DonationStatus status = DonationStatus.PENDING;
    
    private LocalDateTime donationDate = LocalDateTime.now();
    private String message;
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}


	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	
	public AddressEntity getAddress() {
		return address;
	}

	public void setAddress(AddressEntity address) {
		this.address = address;
	}
	
    public LocalDateTime getDonationDate() {
		return donationDate;
	}

	public void setDonationDate(LocalDateTime donationDate) {
		this.donationDate = donationDate;
	}	
	
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}	

	public CategoryType getCategoryType() {
		return categoryType;
	}

	public void setCategoryType(CategoryType categoryType) {
		this.categoryType = categoryType;
	}

	public DonationStatus getStatus() {
		return status;
	}

	public void setStatus(DonationStatus status) {
		this.status = status;
	}	

	public FoodDonationEntity getFoodDonationEntity() {
		return foodDonationEntity;
	}

	public void setFoodDonationEntity(FoodDonationEntity foodDonationEntity) {
		this.foodDonationEntity = foodDonationEntity;
	}

	public FundDonationEntity getFundDonationEntity() {
		return fundDonationEntity;
	}

	public void setFundDonationEntity(FundDonationEntity fundDonationEntity) {
		this.fundDonationEntity = fundDonationEntity;
	}

	public ClothesDonationEntity getClothDonationEntity() {
		return clothDonationEntity;
	}

	public void setClothDonationEntity(ClothesDonationEntity clothDonationEntity) {
		this.clothDonationEntity = clothDonationEntity;
	}

	public GroceryDonationEntity getGroceryDonationEntity() {
		return groceryDonationEntity;
	}

	public void setGroceryDonationEntity(GroceryDonationEntity groceryDonationEntity) {
		this.groceryDonationEntity = groceryDonationEntity;
	}

	public StationeryDonationEntity getStationeryDonationEntity() {
		return stationeryDonationEntity;
	}

	public void setStationeryDonationEntity(StationeryDonationEntity stationeryDonationEntity) {
		this.stationeryDonationEntity = stationeryDonationEntity;
	}

	public FootwearDonationEntity getFootwearDonationEntity() {
		return footwearDonationEntity;
	}

	public void setFootwearDonationEntity(FootwearDonationEntity footwearDonationEntity) {
		this.footwearDonationEntity = footwearDonationEntity;
	}
	
	public boolean isApproved() {
		return isApproved;
	}

	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	
	public enum CategoryType {
		FOOD,
		FUND,
		CLOTHES,
		STATIONERY,
		GROCERY,
		FOOTWEAR
	}
	
	public enum DonationStatus {
		PENDING,
		ACCEPTED,
		REJECTED
	}
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "addressId")
    private AddressEntity address;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "food_id", referencedColumnName = "foodId")
	private FoodDonationEntity foodDonationEntity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fund_id", referencedColumnName = "fundId")
	private FundDonationEntity fundDonationEntity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cloth_id", referencedColumnName = "clothId")
	private ClothesDonationEntity clothDonationEntity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "grocery_id", referencedColumnName = "groceryId")
	private GroceryDonationEntity groceryDonationEntity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "stationery_id", referencedColumnName = "StationeryId")
	private StationeryDonationEntity stationeryDonationEntity;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "footwear_id", referencedColumnName = "FootwearId")
	private FootwearDonationEntity footwearDonationEntity;
}
