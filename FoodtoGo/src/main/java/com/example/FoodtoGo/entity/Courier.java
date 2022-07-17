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

/*    @OneToOne(mappedBy = "couriers",fetch = FetchType.LAZY,targetEntity = Order.class)
    private Order order;*/

}
