package com.example.airjio.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String transactionString; // Can be a transaction ID or reference

    private Long rupees; // Amount paid

    private LocalDateTime purchaseDate;

    @ManyToOne
    @JoinColumn(name = "user_id") // Foreign key to UserInfo
    private UserInfo userInfo;

    @ManyToOne
    @JoinColumn(name = "plan_id") // Foreign key to Plan
    private Plan plan;
}
