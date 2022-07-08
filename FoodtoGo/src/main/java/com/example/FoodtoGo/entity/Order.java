package com.example.FoodtoGo.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue
    private int orderId;
    private Timestamp creationTime;
    private double totalAmount;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "orders_foods",
            joinColumns = @JoinColumn(name = "orders_id"),
            inverseJoinColumns = @JoinColumn(name = "foods_id")
    )
    private List<Food> foods = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "consumerId")
        private Consumer consumer;

    @OneToOne
    @JoinColumn(name = "restaurantId")
    private Restaurant restaurant;

    @OneToOne
    @JoinColumn(name = "courierId")
    private Courier courier;


}
