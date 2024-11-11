package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "GroceryDonationTable")
public class GroceryDonationEntity {	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long groceryId;
	
	@Lob
    private byte[] groceryPicture;	
	private int totalGroceryQuantity;
	
	public byte[] getGroceryPicture() {
		return groceryPicture;
	}
	public void setGroceryPicture(byte[] groceryPicture) {
		this.groceryPicture = groceryPicture;
	}
	public int getTotalGroceryQuantity() {
		return totalGroceryQuantity;
	}
	public void setTotalGroceryQuantity(int totalGroceryQuantity) {
		this.totalGroceryQuantity = totalGroceryQuantity;
	}
	public long getGroceryId() {
		return groceryId;
	}
	public void setGroceryId(long groceryId) {
		this.groceryId = groceryId;
	}
	
	
}
