package com.example.airjio.service;

import org.springframework.stereotype.Service;

import com.example.airjio.dto.request.PlanRequest;
import com.example.airjio.entity.Plan;
import com.example.airjio.repository.PlanRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlanService {
    private final PlanRepository planRepository;

    public String addplan(PlanRequest request) {
        var plan = Plan.builder()
                .name(request.getName())
                .rupees(request.getRupees())
                .type(request.getType())
                .validity(request.getValidity())
                .describe(request.getDescribe())
                .build();
        planRepository.save(plan);
        return "Plan Added Successfully";
    }

    public String updatePlan(Long planId, PlanRequest request) {
        Plan existingPlan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found with id: " + planId));
        existingPlan.setName(request.getName());
        existingPlan.setRupees(request.getRupees());
        existingPlan.setType(request.getType());
        existingPlan.setValidity(request.getValidity());
        existingPlan.setDescribe(request.getDescribe());

        // Save the updated plan
        planRepository.save(existingPlan);

        return "Plan Updated Successfully";
    }

    public java.util.List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Plan getPlanById(Long id) {
        return planRepository.findById(id).orElseThrow(() -> new RuntimeException("Plan not found with id: " + id));
    }

    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }
}