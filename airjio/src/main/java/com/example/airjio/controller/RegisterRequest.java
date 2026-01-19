package com.example.airjio.controller;

import com.example.airjio.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String mobile;
    private String network;
    private String password;
    private Role role;
}
