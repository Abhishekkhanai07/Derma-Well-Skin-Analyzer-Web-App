package com.dermawell.backend.controller;

import com.dermawell.backend.model.User;
import com.dermawell.backend.payload.LoginRequest;
import com.dermawell.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.signup(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest req) {
        return userService.login(req.getEmail(), req.getPassword());
    }
}
