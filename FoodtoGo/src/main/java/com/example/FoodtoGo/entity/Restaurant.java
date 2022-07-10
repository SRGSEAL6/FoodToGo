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
    private String menu;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "restaurants_foods",
            joinColumns = @JoinColumn(name = "restaurants_id"),
            inverseJoinColumns = @JoinColumn(name = "foods_id")
    )
    private List<Food> foods = new ArrayList<>();

/*    @OneToOne(mappedBy = "restaurants", fetch = FetchType.LAZY)
    private Order orders;*/

}
