package com.excelr.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.entity.User;
import com.excelr.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return service.login(user);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> save(@RequestBody User user) {
        String signupMessage = service.signup(user);
        return ResponseEntity.ok(signupMessage);
    }
    
}

