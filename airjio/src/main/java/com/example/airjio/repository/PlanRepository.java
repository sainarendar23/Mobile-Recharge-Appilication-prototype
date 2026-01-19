package com.example.airjio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.airjio.entity.Plan;

public interface PlanRepository extends JpaRepository<Plan,Long>{
    
}
