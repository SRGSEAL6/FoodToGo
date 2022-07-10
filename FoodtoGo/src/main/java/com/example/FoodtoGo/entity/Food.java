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
@Table(name="foods")
public class Food {

    @Id
    @GeneratedValue
    private int id;
    @Enumerated(EnumType.STRING)
    private FoodType foodType;
    private String foodName;
    @Enumerated(EnumType.STRING)
    private SizeType sizeType;
    private double price;


}
