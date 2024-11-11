package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserEntity;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	public UserService userService;
	
	@PostMapping("/addNewUser")
	public ResponseEntity<?> addNewUser(@RequestBody UserEntity userEntity ) {
		return userService.addNewUser(userEntity);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserEntity userEntity) {
		return userService.login(userEntity);
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<List<UserEntity>> getAllUsers() {
        return userService.getAllUsers();
    }
	
	 @PutMapping("/updateUser/{id}")
	 public ResponseEntity<?> updateUser(@PathVariable int id, @RequestBody UserEntity userEntity) {
	        return userService.updateUser(id, userEntity);
	 }

    @DeleteMapping("deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) {
        return userService.deleteUser(id);
    }
}
