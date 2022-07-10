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
@Table(name="consumers")
public class Consumer {

    @Id
    @GeneratedValue
    private int id;
    private String consumerFullName;
    private String consumerAddress;
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;
    private String username;
    private String password;

/*    @OneToOne(mappedBy = "consumers"*//*, fetch = FetchType.LAZY,targetEntity = Order.class*//*)
    private Order order;*/

}
