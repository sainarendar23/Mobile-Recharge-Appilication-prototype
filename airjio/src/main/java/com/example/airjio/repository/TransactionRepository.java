package com.example.airjio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.airjio.entity.Transaction;
import com.example.airjio.entity.UserInfo;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserInfo(UserInfo userInfo);
}
