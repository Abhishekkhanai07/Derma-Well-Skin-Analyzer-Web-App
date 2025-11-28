package com.dermawell.backend.repository;

import com.dermawell.backend.model.Supplement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplementRepository extends JpaRepository<Supplement, Long> {
}
