package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "addressesTable")
public class AddressEntity {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long addressId;

	    private String doorNo;
	    private String street;
	    private String landmark;
	    private String city;
	    private String district;
	    private String state;
	    private String pinCode;
		public Long getAddressId() {
			return addressId;
		}
		public void setAddressId(Long addressId) {
			this.addressId = addressId;
		}
		public String getDoorNo() {
			return doorNo;
		}
		public void setDoorNo(String doorNo) {
			this.doorNo = doorNo;
		}
		public String getStreet() {
			return street;
		}
		public void setStreet(String street) {
			this.street = street;
		}
		public String getLandmark() {
			return landmark;
		}
		public void setLandmark(String landmark) {
			this.landmark = landmark;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getDistrict() {
			return district;
		}
		public void setDistrict(String district) {
			this.district = district;
		}
		public String getPinCode() {
			return pinCode;
		}
		public void setPinCode(String pinCode) {
			this.pinCode = pinCode;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
			    
}
