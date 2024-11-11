package com.example.demo.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "FoodDonationTable")
public class FoodDonationEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long foodId;	
	
	private String spoilingTime;
	private List<String> addItem;
	private List<Integer> foodItemQuantity;
	
	public String getSpoilingTime() {
		return spoilingTime;
	}
	public void setSpoilingTime(String spoilingTime) {
		this.spoilingTime = spoilingTime;
	}	
	public long getFoodId() {
		return foodId;
	}
	public void setFoodId(long foodId) {
		this.foodId = foodId;
	}
	public List<String> getAddItem() {
		return addItem;
	}
	public void setAddItem(List<String> addItem) {
		this.addItem = addItem;
	}
	public List<Integer> getFoodItemQuantity() {
		return foodItemQuantity;
	}
	public void setFoodItemQuantity(List<Integer> foodItemQuantity) {
		this.foodItemQuantity = foodItemQuantity;
	}
}
