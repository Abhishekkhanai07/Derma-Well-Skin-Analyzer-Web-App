package com.dermawell.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String skinType;
    private int price;

    @Column(name = "image_url")
    private String imageUrl;   // IMPORTANT!
}
