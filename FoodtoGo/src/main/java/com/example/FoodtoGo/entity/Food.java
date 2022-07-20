package com.example.FoodtoGo.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
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
    private String imgPath;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurants_id")
    private Restaurant restaurant;
}
