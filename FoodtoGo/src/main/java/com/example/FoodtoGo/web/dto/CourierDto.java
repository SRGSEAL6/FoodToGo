package com.example.FoodtoGo.web.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data

public class CourierDto {

    private int courierId;
    private String courierUsername;
    private String courierName;
    private Boolean hasOrder;


}
