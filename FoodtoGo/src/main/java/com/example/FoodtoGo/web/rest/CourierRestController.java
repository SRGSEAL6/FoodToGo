package com.example.FoodtoGo.web.rest;

import com.example.FoodtoGo.entity.Consumer;
import com.example.FoodtoGo.entity.Courier;
import com.example.FoodtoGo.entity.Order;
import com.example.FoodtoGo.entity.PaymentType;
import com.example.FoodtoGo.repository.CourierRepository;
import com.example.FoodtoGo.web.dto.ConsumerDto;
import com.example.FoodtoGo.web.dto.CourierDto;
import com.example.FoodtoGo.web.dto.HttpError;
import com.example.FoodtoGo.web.dto.OrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping(value="/api")
public class CourierRestController {
    @Autowired
    private CourierRepository courierRepository;
    @PostMapping(
            value = "/registerCourier",
            consumes = {"application/json"}
    )
    public ResponseEntity<?> register(
            @RequestBody Courier courier
    ){
        if (courier.getCourierUsername().trim().isEmpty()) {
            HttpError httpError = new HttpError("Username cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }


        //Saves the consumer to the Database
        courierRepository.save(courier);
        return ResponseEntity.status(HttpStatus.CREATED).body(courier);
    }
    @GetMapping(
            value = "/courierlogin",
            produces = {
                    "application/json"
            },
            params = {"user"}
    )
    public ResponseEntity<?> getCourierByUsername(
            @RequestParam(name="user")String username
    ){
        if(username.isEmpty()) {
            HttpError httpError = new HttpError("Username cannot be empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        Courier courier = courierRepository.findByUsername(username);
        if (courier == null) {
            HttpError httpError = new HttpError("Username cannot be found");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(httpError);
        }
        CourierDto courierDto = new CourierDto(courier.getCourierId(), courier.getCourierUsername(),courier.getCourierName(),courier.getHasOrder());
        return ResponseEntity.ok(courierDto);
    }
/*    @GetMapping(
            value = "/deliverystatus",
            produces = {
                    "application/json"
            }
    )

    public List<OrderDto> getOrder(){
        Iterable<Order> orders = orderRepository.findAll();
        return StreamSupport.stream(orders.spliterator(),false)
                .map(orderDB -> {
                    OrderDto orderDto = new OrderDto();
                    orderDto.setId(orderDb.getId());
                    orderDto.setRestName(restaurantDB.getId());
                    orderDto.setRestAddress(restaurantDB.getRestName());
                    orderDto.setConsumerAddress(consumerDB.getConsumerAddress());
                    orderDto.setConsumerFullName(consumerDB.getConsumerFullName());
                    orderDto.setOrder(orderDB.getOrder());
                    return orderDto;
                })
                .collect(Collectors.toList());
    }*/





}
