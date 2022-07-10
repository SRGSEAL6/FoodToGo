package com.example.FoodtoGo.repository;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Restaurant;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRepository extends CrudRepository<Restaurant, Integer> {
    Restaurant findByUsername(String username);
}
