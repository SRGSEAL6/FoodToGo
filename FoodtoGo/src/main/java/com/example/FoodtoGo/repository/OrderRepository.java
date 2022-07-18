package com.example.FoodtoGo.repository;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Courier;
import com.example.FoodtoGo.entity.Order;
import com.example.FoodtoGo.entity.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Integer> {
    @Query("select u from Order u where u.consumer= ?1")
    List<Order> findByConsumer (Integer consumer_id);
    @Query("select u from Order u where u.restaurant= ?1")
    List<Order> findByResturant (Integer restaurant_id);
    @Query("select u from Order u where u.courier= ?1")
    List<Order> findByCourier (Integer courier_id);
/*    Order findByResturants (Restaurant restaurantId);
    Order findByCourier (Courier courierId);*/
}
