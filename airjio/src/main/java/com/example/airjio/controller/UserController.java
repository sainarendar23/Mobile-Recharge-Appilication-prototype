package com.example.airjio.controller;
import java.util.Optional;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.example.airjio.entity.Plan;
import com.example.airjio.repository.PlanRepository;
import com.example.airjio.repository.UserRepository;
import com.example.airjio.service.UserService;
import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/airjio/user")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class UserController {

    
    private  UserRepository userRepository;
    private  UserService userService;
    private  PlanRepository planRepository;

    @GetMapping("/info/{mobile}")
    @PreAuthorize("hasAuthority('user:READ')")
    public Optional getinfo(@PathVariable String mobile){
        return userRepository.findById(mobile);
    }
    @PutMapping("/info/update/{mobile}")
    @PreAuthorize("hasAuthority('user:UPDATE')")
    public String updateInfo(@PathVariable String mobile,@RequestBody RegisterRequest registerRequest)
    {
        
        return userService.updateInfo(registerRequest);
    }
    @DeleteMapping("/delete/{mobile}")
    @PreAuthorize("hasAuthority('user:DELETE')")
    public String delete(@PathVariable String mobile){
        userRepository.deleteById(mobile);
        return "Account Deleted Successfully";
    }
     @GetMapping("/veiwplan")
    @PreAuthorize("hasAuthority('user:READ')")
    public List<Plan> veiwplans(){
        return planRepository.findAll();
    }
    @GetMapping("/veiwplan/{id}")
    @PreAuthorize("hasAuthority('user:READ')")
    public Optional<Plan> veiwPlanUser(@PathVariable Long id)
    {
        return planRepository.findById(id);
    }
}
