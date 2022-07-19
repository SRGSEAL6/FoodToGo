package com.example.FoodtoGo.web.rest;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Food;
import com.example.FoodtoGo.entity.PaymentType;
import com.example.FoodtoGo.entity.Restaurant;
import com.example.FoodtoGo.repository.ConsumerRepository;
import com.example.FoodtoGo.repository.FoodRepository;
import com.example.FoodtoGo.repository.RestaurantRepository;
import com.example.FoodtoGo.web.dto.ConsumerDto;
import com.example.FoodtoGo.web.dto.HttpError;
import com.example.FoodtoGo.web.dto.RestuarantDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin("*")
public class ConsumerRestController {

    @Autowired
    private ConsumerRepository consumerRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private FoodRepository foodRepository;
    @PostMapping(
            value = "/registerConsumer",
            consumes = {"application/json"}
    )
    public ResponseEntity<?> register(
            @RequestBody Consumer consumer
    ){
        if (consumer.getUsername().trim().isEmpty()) {
            HttpError httpError = new HttpError("Username cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        //This is optional we can directly save the @RequestBody to the DataBase
        /*Consumer dbConsumer = new Consumer();
        dbConsumer.setConsumerFullName(consumer.getConsumerFullName());
        dbConsumer.setConsumerAddress(consumer.getConsumerAddress());
        dbConsumer.setPassword(consumer.getPassword());
        dbConsumer.setUsername(consumer.getUsername());*/

        //Saves the consumer to the Database
        consumerRepository.save(consumer);
        consumer.setPaymentType(PaymentType.CREDIT);
        return ResponseEntity.status(HttpStatus.CREATED).body(consumer);
    }
    @GetMapping(
            value = "/login",
            produces = {
                    "application/json"
            },
            params = {"user"}
    )
    public ResponseEntity<?> getConsumerByUsername(
            @RequestParam(name = "user") String username
    ){
        //Checks if the username param is not empty
        if (username.isEmpty()) {
            HttpError httpError = new HttpError("Username cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        Consumer consumer = consumerRepository.findByUsername(username);
        //Checks if the consumer is not null (Not found in the Database)
        if (consumer == null) {
            HttpError httpError = new HttpError("Username cannot be found");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        ConsumerDto consumerDto = new ConsumerDto(consumer.getId(), consumer.getConsumerFullName(),
                consumer.getConsumerAddress(), consumer.getPaymentType(), consumer.getUsername());
        return ResponseEntity.ok(consumerDto);
    }

    @GetMapping(
            value = "/restaurants",
            produces = {
                    "application/json"
            }
    )
    public List<RestuarantDto> getRestaurants (){

        Iterable<Restaurant> restaurants = restaurantRepository.findAll();

        return StreamSupport.stream(restaurants.spliterator(), false)
                .map(restaurantDB -> {
                    RestuarantDto restuarantDto = new RestuarantDto();
                    restuarantDto.setId(restaurantDB.getId());
                    restuarantDto.setRestName(restaurantDB.getRestName());
                    restuarantDto.setRestAddress(restaurantDB.getRestAddress());
                    restuarantDto.setUsername(restaurantDB.getUsername());
                    restuarantDto.setMenu(restaurantDB.getFoods());
                    return restuarantDto;
                })
                .collect(Collectors.toList());
    }
    @GetMapping(
            value = "/restaurants",
            produces = {
                    "application/json"
            },
            params = {"id"}
    )
    public ResponseEntity<?> getResturantByUsername(
            @RequestParam(name = "id") String username
    ){
        //Checks if the username param is not empty
        if (username.isEmpty()) {
            HttpError httpError = new HttpError("Username cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        Restaurant restaurant = restaurantRepository.findByUsername(username);
        //Checks if the restaurant is not null (Not found in the Database)
        if (restaurant == null) {
            HttpError httpError = new HttpError("Username cannot be found");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        RestuarantDto restuarantDto = new RestuarantDto(restaurant.getId(), restaurant.getRestName(),
                restaurant.getRestAddress(), restaurant.getUsername(), restaurant.getFoods());
        return ResponseEntity.ok(restuarantDto);
    }
    @GetMapping(
            value = "/getFood",
            produces = {
                    "application/json"
            }
    )
    public List<Food> getFood (){

        Iterable<Food> foodList = foodRepository.findAll();

        return (List) foodList;
    }

}

