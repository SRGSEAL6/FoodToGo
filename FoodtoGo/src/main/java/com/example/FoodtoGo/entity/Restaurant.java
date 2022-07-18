package com.example.FoodtoGo.entity;

import lombok.*;
import com.example.FoodtoGo.entity.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
@Entity
@Table(name="restaurants")
public class Restaurant implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private String restName;
    private String restAddress;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private RestaurantType restaurantType;
    @Enumerated(EnumType.STRING)
    private AccountType accountType;

    //private String menu;

    @OneToMany(fetch = FetchType.LAZY)
/*    @JoinTable(
            name = "restaurants_foods",
            joinColumns = @JoinColumn(name = "restaurants_id"),
            inverseJoinColumns = @JoinColumn(name = "foods_id")
    )*/
    private List<Food> foods = new ArrayList<>();

    @OneToOne(mappedBy = "restaurant", fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    private Order order;

}
