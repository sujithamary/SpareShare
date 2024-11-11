package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "ClothDonationTable")
public class ClothesDonationEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long clothId;
	
	@Lob
    private byte[] clothPicture;	
	private int totalClothQuantity;	

	public byte[] getClothPicture() {
		return clothPicture;
	}

	public void setClothPicture(byte[] clothPicture) {
		this.clothPicture = clothPicture;
	}

	public int getTotalClothQuantity() {
		return totalClothQuantity;
	}

	public void setTotalClothQuantity(int totalClothQuantity) {
		this.totalClothQuantity = totalClothQuantity;
	}

	public long getClothId() {
		return clothId;
	}

	public void setClothId(long clothId) {
		this.clothId = clothId;
	}
	
		
	
}
