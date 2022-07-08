package com.example.FoodtoGo.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="couriers")
public class Courier {

    @Id
    @GeneratedValue
    private int courierId;
    private String courierName;
    private Boolean hasOrder;

    @OneToOne(mappedBy = "couriers", targetEntity = Order.class)
    private Order order;

}
