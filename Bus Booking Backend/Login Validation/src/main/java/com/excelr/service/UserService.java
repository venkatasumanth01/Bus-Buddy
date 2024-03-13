package com.excelr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.entity.User;
import com.excelr.repo.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public String signup(User user) {
        User savedUser = repo.save(user);

        if (savedUser != null) {
            return "Signup Success";
        } else {
            return "Signup Fail";
        }
    }

    public String login(User user) {
        User existingUser = repo.findByEmail(user.getEmail());

        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return "Login Success";
        } else {
            return "Login Fail";
        }
    }
}
