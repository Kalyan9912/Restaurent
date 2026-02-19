package com.example.demo.model;

public class Dish {
    private Long id;
    private String name;
    private double price;

    public Dish(Long id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
}

