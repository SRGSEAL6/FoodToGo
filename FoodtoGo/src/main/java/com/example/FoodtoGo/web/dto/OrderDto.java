package com.example.FoodtoGo.web.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
public class OrderDto {
    private int id;
    private String consumerAddress;
    private String consumerFullName;
    private String restName;
    private String restAddress;
    private double totalAmount;
    private String order;

}
