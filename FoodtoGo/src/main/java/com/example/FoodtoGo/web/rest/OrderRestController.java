package com.example.FoodtoGo.web.rest;

import com.example.FoodtoGo.entity.Food;
import com.example.FoodtoGo.entity.Order;
import com.example.FoodtoGo.repository.FoodRepository;
import com.example.FoodtoGo.repository.OrderRepository;
import com.example.FoodtoGo.repository.RestaurantRepository;
import com.example.FoodtoGo.web.dto.HttpError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("*")
public class OrderRestController {
    @Autowired
    FoodRepository foodRepository;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    OrderRepository orderRepository;

    @PostMapping(
            value = "/order",
            consumes = {"application/json"}
    )
    public ResponseEntity<?> makeOrder(
            @RequestBody Order order
    ){
        if (order != null) {
            HttpError httpError = new HttpError("Order cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }

        orderRepository.save(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(order);
    }
    @PutMapping(
            value = "/order/{id}",
            consumes = {"application/json"}
    )
    public ResponseEntity<?> replaceOrder(@RequestBody Order newOrder, @PathVariable Integer id) {
        if (newOrder != null) {
            HttpError httpError = new HttpError("Order cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        orderRepository.findById(id)
                .map(order -> {
                    order.setConsumer(newOrder.getConsumer());
                    order.setCourier(newOrder.getCourier());
                    order.setRestaurant(newOrder.getRestaurant());
                    order.setFoods(newOrder.getFoods());
                    order.setTotalAmount(newOrder.getTotalAmount());
                    orderRepository.save(order);
                    return ResponseEntity.ok(order);
                });
        return ResponseEntity.ok().body("ok");

    }
    @GetMapping(
            value = "/order",
            produces = {
                    "application/json"
            }
    )
    public ResponseEntity<?> getAllOrders(){
        List<Order> orderList = new ArrayList<>();
        orderList.addAll((List)orderRepository.findAll());

        return ResponseEntity.ok(orderList);
    }
    @GetMapping(
            value = "/order",
            produces = {
                    "application/json"
            },
            params = {"consumer"}
    )
    public ResponseEntity<?> getOrdersByConsumer(@RequestParam(name = "consumer") String consumer){
        if (consumer.isEmpty()){
            HttpError httpError = new HttpError("Consumer can not be empty");
            return ResponseEntity.badRequest().body(httpError);
        }
        List<Order> orderList = new ArrayList<>();
        orderList.addAll((List)orderRepository.findByConsumer(Integer.parseInt(consumer)));


        return ResponseEntity.ok(orderList);
    }
    @GetMapping(
            value = "/order",
            produces = {
                    "application/json"
            },
            params = {"restaurant"}
    )
    public ResponseEntity<?> getOrdersByRestaurant(@RequestParam(name = "restaurant") String restaurant){
        if (restaurant.isEmpty()){
            HttpError httpError = new HttpError("restaurant can not be empty");
            return ResponseEntity.badRequest().body(httpError);
        }
        List<Order> orderList = new ArrayList<>();
        orderList.addAll((List)orderRepository.findByConsumer(Integer.parseInt(restaurant)));


        return ResponseEntity.ok(orderList);
    }
    @GetMapping(
            value = "/order",
            produces = {
                    "application/json"
            },
            params = {"courier"}
    )
    public ResponseEntity<?> getOrdersByCourier(@RequestParam(name = "courier") String courier){
        if (courier.isEmpty()){
            HttpError httpError = new HttpError("courier can not be empty");
            return ResponseEntity.badRequest().body(httpError);
        }
        List<Order> orderList = new ArrayList<>();
        orderList.addAll((List)orderRepository.findByConsumer(Integer.parseInt(courier)));


        return ResponseEntity.ok(orderList);
    }


}
