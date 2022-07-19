package com.example.FoodtoGo.repository;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Food;
import com.example.FoodtoGo.entity.Order;
import com.example.FoodtoGo.entity.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FoodRepository extends CrudRepository<Food, Integer> {
    @Query("from Food f where f.restaurant.id = ?1")
    List<Food> findByResturant (Integer id);
    @Query("from Food f where f.order.id= ?1")
    List<Food> findByOrder (Integer order_id);
}
