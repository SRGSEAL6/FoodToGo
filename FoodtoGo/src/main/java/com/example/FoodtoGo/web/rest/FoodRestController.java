package com.example.FoodtoGo.web.rest;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Food;
import com.example.FoodtoGo.entity.PaymentType;
import com.example.FoodtoGo.entity.Restaurant;
import com.example.FoodtoGo.repository.FoodRepository;
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
public class FoodRestController {
    @Autowired
    FoodRepository foodRepository;
    @Autowired
    RestaurantRepository restaurantRepository;

    @PostMapping(
            value = "/food",
            consumes = {"application/json"}
    )
    public ResponseEntity<?> makeFood(
            @RequestBody Food food
    ){
        if (food.getFoodName().trim().isEmpty()) {
            HttpError httpError = new HttpError("Food name cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }

        foodRepository.save(food);
        return ResponseEntity.status(HttpStatus.CREATED).body(food);
    }
    @GetMapping(
            value = "/food",
            produces = {
                    "application/json"
            },
            params = {"restaurant"}
    )
    public ResponseEntity<?> getFoodByRestaurantId(@RequestParam(name = "restaurant") Integer restaurant){
        if (restaurant == null){
            HttpError httpError = new HttpError("Restaurant can not be empty");
            return ResponseEntity.badRequest().body(httpError);
        }
        List<Food> foodList = new ArrayList<>();
        foodList.addAll(foodRepository.findByResturant(restaurant));
        System.out.println(foodList);
        return ResponseEntity.ok(foodList);
    }
    @GetMapping(
            value = "/food",
            produces = {
                    "application/json"
            },
            params = {"order"}
    )
    public ResponseEntity<?> getFoodByOrderId(@RequestParam(name = "order") String order){
        if (order.isEmpty()){
            HttpError httpError = new HttpError("Order can not be empty");
            return ResponseEntity.badRequest().body(httpError);
        }
        List<Food> foodList = new ArrayList<>();
        foodList.addAll(foodRepository.findByOrder(Integer.parseInt(order)));

        return ResponseEntity.ok(foodList);
    }
}
