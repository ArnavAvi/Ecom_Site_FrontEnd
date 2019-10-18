package com.shopping.ecom.repository;

import com.shopping.ecom.modal.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Products,Integer> {
    @Query(value = "select p from Products p where p.category = ?1")
    List<Products> findByCategory(String category);

    Products findById(int id);

    Products findByName(String product_id);
}
