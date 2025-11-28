package com.dermawell.backend.controller;

import com.dermawell.backend.model.Supplement;
import com.dermawell.backend.service.SupplementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/supplements")
public class SupplementController {

    @Autowired
    private SupplementService service;

    @GetMapping
    public List<Supplement> getAll() {
        return service.getAllSupplements();
    }

    @GetMapping("/{id}")
    public Supplement getOne(@PathVariable Long id) {
        return service.getSupplementById(id);
    }
}
