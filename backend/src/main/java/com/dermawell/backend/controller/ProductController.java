package com.dermawell.backend.controller;

import com.dermawell.backend.model.Product;
import com.dermawell.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    // Get all products
    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // Get products by skin type (oily, dry, normal)
    @GetMapping("/{skinType}")
    public List<Product> getBySkinType(@PathVariable String skinType) {
        return service.getProductsBySkinType(skinType);
    }

    // Get product details by ID
    @GetMapping("/details/{id}")
    public Product getProduct(@PathVariable Long id) {
        return service.getProductById(id);
    }
}
