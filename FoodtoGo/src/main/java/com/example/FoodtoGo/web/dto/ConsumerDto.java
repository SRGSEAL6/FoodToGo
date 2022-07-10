package com.example.FoodtoGo.web.dto;

import com.example.FoodtoGo.entity.PaymentType;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
public class ConsumerDto {
    private int id;
    private String consumerFullName;
    private String consumerAddress;
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;
    private String username;
}
