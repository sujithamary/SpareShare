package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "StationeryDonationTable")
public class StationeryDonationEntity {	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long stationeryId;	
	
	@Lob
    private byte[] stationeryPicture;
	
	private int totalStationeryQuantity;


	public byte[] getStationeryPicture() {
		return stationeryPicture;
	}

	public void setStationeryPicture(byte[] stationeryPicture) {
		this.stationeryPicture = stationeryPicture;
	}

	public int getTotalStationeryQuantity() {
		return totalStationeryQuantity;
	}

	public void setTotalStationeryQuantity(int totalStationeryQuantity) {
		this.totalStationeryQuantity = totalStationeryQuantity;
	}

	public long getStationeryId() {
		return stationeryId;
	}

	public void setStationeryId(long stationeryId) {
		this.stationeryId = stationeryId;
	}
		
}

