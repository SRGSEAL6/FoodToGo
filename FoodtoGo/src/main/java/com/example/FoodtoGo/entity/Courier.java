package com.example.FoodtoGo.entity;

import lombok.*;
import com.example.FoodtoGo.entity.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
@Entity
@Table(name="couriers")
public class Courier {

    @Id
    @GeneratedValue
    private int courierId;
    private String courierUsername;
    private String courierPassword;
    private String courierName;
    private Boolean hasOrder;
    private String dateOfBirth;
    private int licenseNumber;
    private String carMake;
    @Enumerated(EnumType.STRING)
    private AccountType accountType;

    @OneToOne(mappedBy = "courier", fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    private Order order;

}
