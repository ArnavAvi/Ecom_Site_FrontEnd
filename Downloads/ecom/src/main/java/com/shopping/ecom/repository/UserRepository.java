package com.shopping.ecom.repository;

import com.shopping.ecom.modal.Products;
import com.shopping.ecom.modal.User;
import com.shopping.ecom.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


    User findByUserId(int user_id);

    User findByEmail(String email);
}

