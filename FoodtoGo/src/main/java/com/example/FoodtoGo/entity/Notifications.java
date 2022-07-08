package com.example.FoodtoGo.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="notifications")
public class Notifications {

    @Id
    @GeneratedValue
    private int notificationId;
    private String message;

    // Below needs changes to specify notifications
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "orders_foods",
            joinColumns = @JoinColumn(name = "orders_id"),
            inverseJoinColumns = @JoinColumn(name = "foods_id")
    )
    private List<Food> foods = new ArrayList<>();

}
