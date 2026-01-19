package com.example.airjio.service;



import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.airjio.controller.RegisterRequest;
import com.example.airjio.entity.UserInfo;
import com.example.airjio.repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class UserService {
    private final  UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public String updateInfo(RegisterRequest registerRequest){
        var user = UserInfo.builder()
        .mobile(registerRequest.getMobile())
        .network(registerRequest.getNetwork())
        .password(passwordEncoder.encode(registerRequest.getPassword()))
        .role(registerRequest.getRole())
        .build();
        userRepository.save(user);
        return "User Updated";
    }
}
