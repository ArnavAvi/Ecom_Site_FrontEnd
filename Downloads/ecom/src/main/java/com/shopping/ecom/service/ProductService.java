package com.shopping.ecom.service;

import com.shopping.ecom.modal.Products;
import com.shopping.ecom.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Products> show()
    {
        return productRepository.findAll();
    }
    public Products getProductById(int id)
    {
        return productRepository.findById(id);
    }
    public Products addProduct(Products p) {
        return productRepository.save(p);
    }

    public void deleteById(int id) {
        productRepository.deleteById(id);
    }

    public List<Products> showByCategory(String cat) {
        return productRepository.findByCategory(cat);
    }
}
