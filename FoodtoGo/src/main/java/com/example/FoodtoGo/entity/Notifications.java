package com.example.FoodtoGo.entity;

import lombok.*;
import com.example.FoodtoGo.entity.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
@Entity
@Table(name="notifications")
public class Notifications {

    @Id
    @GeneratedValue
    private int id;
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
