package com.example.airjio.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlanRequest {
    private String name;
    private int rupees;
    private String type;
    private int validity;
    private String describe;
}
