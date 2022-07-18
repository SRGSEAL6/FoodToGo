package com.example.FoodtoGo.entity;


import lombok.*;
import com.example.FoodtoGo.entity.*;
import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
@Entity
@Table(name="foods")
public class Food implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    @Enumerated(EnumType.STRING)
    private FoodType foodType;
    private String foodName;
    @Enumerated(EnumType.STRING)
    private SizeType sizeType;
    private double price;
    private String ingredients;
    private String Description;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurants_id")
    private Restaurant restaurant;
}
