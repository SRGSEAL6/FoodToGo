package com.example.FoodtoGo.repository;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Courier;
import org.springframework.data.repository.CrudRepository;

public interface CourierRepository extends CrudRepository<Courier, Integer> {
    Courier findByUsername(String username);
}
