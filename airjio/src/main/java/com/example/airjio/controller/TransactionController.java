package com.example.airjio.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.airjio.entity.Transaction;
import com.example.airjio.service.TransactionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/airjio/transaction")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/create")
    @PreAuthorize("hasAnyAuthority('user:CREATE', 'admin:CREATE')")
    public String createTransaction(@RequestParam String mobile, @RequestParam Long planId) {
        return transactionService.buyPlan(mobile, planId);
    }

    @GetMapping("/history/{mobile}")
    @PreAuthorize("hasAnyAuthority('user:READ', 'admin:READ')")
    public List<Transaction> getTransactionHistory(@PathVariable String mobile) {
        return transactionService.getTransactionHistory(mobile);
    }
}
