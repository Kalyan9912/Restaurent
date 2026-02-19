package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

import com.example.demo.model.Dish;

@RestController
@RequestMapping("/api/dishes")
@CrossOrigin
public class DishController {

    @GetMapping
    public List<Dish> getDishes() {
        return List.of(
            new Dish(1L, "Grilled Salmon", 18.99),
            new Dish(2L, "Steak and Fries", 24.99),
            new Dish(3L, "Margherita Pizza", 14.99),
	    new Dish(4L, "Chicken Biryani", 12.99)
        );
    }
}

