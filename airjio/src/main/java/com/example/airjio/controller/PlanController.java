package com.example.airjio.controller;

import java.util.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.airjio.dto.request.PlanRequest;
import com.example.airjio.entity.Plan;

import com.example.airjio.service.PlanService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/airjio/admin")
@RequiredArgsConstructor
public class PlanController {
    private final PlanService planService;

    @PostMapping("/addplan")
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public String addplan(@RequestBody PlanRequest planRequest) {
        return planService.addplan(planRequest);
    }

    @GetMapping("/viewplan")
    @PreAuthorize("hasAuthority('admin:READ')")
    public List<Plan> viewplan() {
        return planService.getAllPlans();
    }

    @GetMapping("/viewplan/{id}")
    @PreAuthorize("hasAuthority('admin:READ')")
    public Plan viewPlan(@PathVariable Long id) {
        return planService.getPlanById(id);
    }

    @PutMapping("/updateplan/{id}")
    @PreAuthorize("hasAuthority('admin:UPDATE')")
    public String updateplan(@PathVariable Long id, @RequestBody PlanRequest planRequest) {
        return planService.updatePlan(id, planRequest);
    }

    @DeleteMapping("/deleteplan/{id}")
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public String delete(@PathVariable Long id) {
        planService.deletePlan(id);
        return "Plan Deleted Successfully";
    }
}