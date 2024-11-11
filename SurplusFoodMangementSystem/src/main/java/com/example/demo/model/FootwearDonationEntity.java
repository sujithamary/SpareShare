package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "FootwearDonationTable")
public class FootwearDonationEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long footwearId;
	
	@Lob
    private byte[] FootwearPicture;
	
	private int totalFootwearQuantity;

	

	public byte[] getFootwearPicture() {
		return FootwearPicture;
	}

	public void setFootwearPicture(byte[] footwearPicture) {
		FootwearPicture = footwearPicture;
	}

	public int getTotalFootwearQuantity() {
		return totalFootwearQuantity;
	}

	public void setTotalFootwearQuantity(int totalFootwearQuantity) {
		this.totalFootwearQuantity = totalFootwearQuantity;
	}

	public long getFootwearId() {
		return footwearId;
	}

	public void setFootwearId(long footwearId) {
		this.footwearId = footwearId;
	}
}
