package com.dermawell.backend.repository;

import com.dermawell.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findBySkinType(String skinType);

}
