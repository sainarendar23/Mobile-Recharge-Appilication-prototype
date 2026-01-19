package com.example.airjio.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.airjio.entity.Plan;
import com.example.airjio.entity.Transaction;
import com.example.airjio.entity.UserInfo;
import com.example.airjio.repository.PlanRepository;
import com.example.airjio.repository.TransactionRepository;
import com.example.airjio.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final PlanRepository planRepository;
    private final UserRepository userRepository;

    public String buyPlan(String mobile, Long planId) {
        UserInfo user = userRepository.findById(mobile)
                .orElseThrow(() -> new RuntimeException("User not found: " + mobile));

        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found: " + planId));

        Transaction transaction = Transaction.builder()
                .transactionString(UUID.randomUUID().toString())
                .rupees((long) plan.getRupees())
                .purchaseDate(LocalDateTime.now())
                .userInfo(user)
                .plan(plan)
                .build();

        transactionRepository.save(transaction);
        return "Plan purchased successfully. Transaction ID: " + transaction.getTransactionString();
    }

    public List<Transaction> getTransactionHistory(String mobile) {
        UserInfo user = userRepository.findById(mobile)
                .orElseThrow(() -> new RuntimeException("User not found: " + mobile));

        return transactionRepository.findByUserInfo(user);
    }
}
