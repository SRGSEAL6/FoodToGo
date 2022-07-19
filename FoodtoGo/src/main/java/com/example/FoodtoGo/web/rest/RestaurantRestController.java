package com.example.FoodtoGo.web.rest;

import com.example.FoodtoGo.entity.Food;
import com.example.FoodtoGo.entity.Order;
import com.example.FoodtoGo.entity.Restaurant;
import com.example.FoodtoGo.repository.FoodRepository;
import com.example.FoodtoGo.repository.OrderRepository;
import com.example.FoodtoGo.repository.RestaurantRepository;
import com.example.FoodtoGo.web.dto.HttpError;
import com.example.FoodtoGo.web.dto.RestuarantDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("*")
public class RestaurantRestController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping(
            value = "/registerRestaurant",
            consumes = {"application/json"}
    )
    public ResponseEntity<?> register(
        @RequestBody Restaurant restaurant
    ) {
        if (restaurant.getUsername().trim().isEmpty()) {
            HttpError httpError = new HttpError("Restaurant cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);

        }
        restaurantRepository.save(restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurant);

    }
    @GetMapping(
            value = "/login",
            produces = {
                    "application/json"
            },
            params = {"restaurant"}
    )
    public ResponseEntity<?> getRestaurantByUsername(
            @RequestParam(name = "restaurant") String username){
        if (username.isEmpty()){
            HttpError httpError = new HttpError("Restaurant cannot be empty");
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        Restaurant restaurant= restaurantRepository.findByUsername(username);
        if (restaurant==null){
            HttpError httpError = new HttpError("Restaurant does not exist");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        RestuarantDto restuarantDto = new RestuarantDto(restaurant.getId(), restaurant.getRestName(), restaurant.getRestAddress(), restaurant.getUsername(), restaurant.getFoods());
        return ResponseEntity.ok(restuarantDto);
    }

    @GetMapping(value = "/restaurant",produces = {"application/json"}, params = {"restaurantID"})
    public List <Food> getRestaurantFoods(@RequestParam("restaurantID") Integer restaurantID){

    Iterable<Food> RestaurantMenu = foodRepository.findByResturant(restaurantID);
        return (List)RestaurantMenu;


    }
    @GetMapping(value = "/restaurant",produces = {"application/json"}, params = {"orderID"})
    public List <Order> getRestaurantOrders(@RequestParam("orderID") Integer orderID) {

        Iterable<Order> RestaurantOrders = orderRepository.findByResturant(orderID);
        return (List) RestaurantOrders;
    }
}
