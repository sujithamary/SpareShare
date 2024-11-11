package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	public UserRepository userRepo;
	
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	public ResponseEntity<?> addNewUser(UserEntity userEntity) {
		if(userRepo.findByUserEmail(userEntity.getUserEmail()) != null) {
			return new ResponseEntity<>("Email Already in use", HttpStatus.BAD_REQUEST);
		}
		if(userRepo.findByUserPhoneNumber(userEntity.getUserPhoneNumber()) != null) {
			return new ResponseEntity<>("Phone Number Already in use", HttpStatus.BAD_REQUEST);
		}
		
		userEntity.setUserPassword(passwordEncoder.encode(userEntity.getUserPassword()));
		userRepo.save(userEntity);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	public ResponseEntity<?> login(UserEntity userEntity) {
		 UserEntity check = userRepo.findByUserEmail(userEntity.getUserEmail());
		 if(check == null) {
			 return new ResponseEntity<>("User does not exist", HttpStatus.UNAUTHORIZED);
		 }
		 else {
			 if(passwordEncoder.matches(userEntity.getUserPassword(),check.getUserPassword())) {
				 return new ResponseEntity<>("Login Successfull", HttpStatus.OK);
			 }
			 else {
				 return new ResponseEntity<>("Invalid email or password", HttpStatus.BAD_REQUEST);
			 }
		 }
	}
	
	 public ResponseEntity<List<UserEntity>> getAllUsers() {
	        List<UserEntity> users = userRepo.findAll();
	        return new ResponseEntity<>(users, HttpStatus.OK);
	 }
	 
	 public ResponseEntity<?> updateUser(int id, UserEntity userEntity) {
	        UserEntity existingUser = userRepo.findById(id).orElse(null);
	        if (existingUser == null) {
	            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
	        }

	        existingUser.setUserFirstName(userEntity.getUserFirstName());
	        existingUser.setUserLastName(userEntity.getUserLastName());
	        existingUser.setUserPhoneNumber(userEntity.getUserPhoneNumber());
	        existingUser.setUserEmail(userEntity.getUserEmail());
	        if (userEntity.getUserPassword() != null && !userEntity.getUserPassword().isEmpty()) {
	            existingUser.setUserPassword(passwordEncoder.encode(userEntity.getUserPassword()));
	        }
	        userRepo.save(existingUser);
	        return new ResponseEntity<>(existingUser, HttpStatus.OK);
	    }

	    public ResponseEntity<?> deleteUser(int id) {
	        if (userRepo.existsById(id)) {
	            userRepo.deleteById(id);
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        } else {
	            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
	        }
	    }
}
