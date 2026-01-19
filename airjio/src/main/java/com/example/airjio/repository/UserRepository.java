package com.example.airjio.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.airjio.entity.UserInfo;

public interface UserRepository extends JpaRepository<UserInfo,String>{
    Optional<UserInfo> findByMobile(String mobile);

    
}
