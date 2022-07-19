package com.example.FoodtoGo.web.dto;


import com.example.FoodtoGo.entity.AccountType;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

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
    private String dateOfBirth;
    private int licenseNumber;
    private String carMake;
    @Enumerated(EnumType.STRING)
    private AccountType accountType;


}
