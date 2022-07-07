package com.example.FoodtoGo.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="users")
public class Consumer {

    @Id
    @GeneratedValue
    private int consumerId;
    private String consumerFullName;
    private String consumerAddress;
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;
    private String username;
    private String password;

    @OneToOne(mappedBy = "consumers", targetEntity = Order.class)
    private Order order;

}
