package com.example.airjio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.airjio.entity.UserInfo;
import com.example.airjio.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/airjio/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private  UserRepository userRepository;
    
    @GetMapping("/veiw")
    @PreAuthorize("hasAuthority('admin:READ')")
    public List<UserInfo> get(){
        return userRepository.findAll();
    }
    @DeleteMapping("/delete/{mobile}")
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public String delete(@PathVariable String mobile){
        userRepository.deleteById(mobile);
        return "User Deleted Successfully";
    }
}
