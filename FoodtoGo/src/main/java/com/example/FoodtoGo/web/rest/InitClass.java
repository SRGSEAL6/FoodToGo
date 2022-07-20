package com.example.FoodtoGo.web.rest;

import com.example.FoodtoGo.entity.*;
import com.example.FoodtoGo.repository.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class InitClass {
    @Autowired
    private ConsumerRepository consumerRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private CourierRepository courierRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private FoodRepository foodRepository;

    @Transactional
    @GetMapping(
            value = "/test",
            produces = {
                    "application/json"
            })
    public ResponseEntity<?> postConstruct() {
        System.out.println("PostConstruct");

        consumermaker(consumerRepository);
        restaurantmaker(restaurantRepository, foodRepository);
        couriermaker(courierRepository);
        return ResponseEntity.accepted().body("Good");
    }

    public static void consumermaker(ConsumerRepository consumerRepository){
        Consumer consumer = new Consumer();
        consumer.setConsumerFullName("Javier");
        consumer.setConsumerAddress("123 addy");
        consumer.setPaymentType(PaymentType.CREDIT);
        consumer.setUsername("javi");
        consumer.setPassword("123");
        consumer.setAccountType(AccountType.CONSUMER);
        consumerRepository.save(consumer);
    }
    public static void restaurantmaker(RestaurantRepository restaurantRepository, FoodRepository foodRepository){
        List<Food> mcdFood = new ArrayList<>();
        Restaurant restaurant = new Restaurant(2, "McD's", "123 addy", "mcd", "123", RestaurantType.AMERICAN, AccountType.RESTAURANT, mcdFood,null);
        restaurantRepository.save(restaurant);
        Food food = new Food();
        foodRepository.save(food);
        mcdFood.add(food);
    }
    public static void couriermaker(CourierRepository courierRepository){

    }



}
