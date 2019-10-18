package com.shopping.ecom.repository;

import com.shopping.ecom.modal.Cart;
import com.shopping.ecom.modal.Products;
import com.shopping.ecom.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface CartRepository extends JpaRepository<Cart,Integer> {
    Object findByUsersAndProduct(User user, Products products);

    void deleteAllByUsersAndProduct(User users, Products products);

    List<Cart> findByUsers(User users);
}
