package com.example.FoodtoGo.repository;

import com.example.FoodtoGo.entity.Consumer;
import org.springframework.data.repository.CrudRepository;

public interface ConsumerRepository extends CrudRepository<Consumer, Integer> {
    Consumer findByUsername(String username);

}
