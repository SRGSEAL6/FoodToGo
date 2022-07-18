package com.example.FoodtoGo.repository;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Food;
import com.example.FoodtoGo.entity.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FoodRepository extends CrudRepository<Food, Integer> {
    @Query("select u from Food u where u.restaurant= ?1")
    List<Food> findByResturant (Integer restuarant_id);
    @Query("select u from Food u where u.order= ?1")
    List<Food> findByOrder (Integer order_id);
}
