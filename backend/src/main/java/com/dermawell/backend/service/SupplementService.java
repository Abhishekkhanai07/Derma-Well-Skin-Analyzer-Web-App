package com.dermawell.backend.service;

import com.dermawell.backend.model.Supplement;
import com.dermawell.backend.repository.SupplementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplementService {

    private final SupplementRepository repo;

    public SupplementService(SupplementRepository repo) {
        this.repo = repo;
    }

    public List<Supplement> getAllSupplements() {
        return repo.findAll();
    }

    public Supplement getSupplementById(Long id) {
        return repo.findById(id).orElse(null);
    }
}
