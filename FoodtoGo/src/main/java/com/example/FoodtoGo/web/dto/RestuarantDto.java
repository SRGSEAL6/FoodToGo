package com.example.FoodtoGo.web.dto;

import com.example.FoodtoGo.entity.Food;
import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
public class RestuarantDto {

    private int id;
    private String restName;
    private String restAddress;
    private String username;
    private List<Food> menu = new ArrayList<>();
}
