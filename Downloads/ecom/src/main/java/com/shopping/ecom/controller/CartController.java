package com.shopping.ecom.controller;

import com.shopping.ecom.modal.Cart;
import com.shopping.ecom.service.CartService;
import com.shopping.ecom.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RequestMapping(value="/cart")
public class CartController {

    @Autowired
    CartService cartService;
    @Autowired
    UserService userService;

    @GetMapping("/addToCart/{productId}")
    public String addToCart(@PathVariable("productId") int productId, Principal principal) {
            System.out.println("addToCart mapped into controller");
            cartService.addProduct(userService.getUserIds(principal), productId);
            return "\"Added Product To Cart\"";
        }


    @GetMapping("/removeOneFromCart/{productId}")
    public String removeOneFromCart(@PathVariable("productId") int productId, Principal principal) {
        cartService.subtractProduct(userService.getUserIds(principal), productId);
        return "\"Removed One Product\"";
    }

    @GetMapping("/removeFromCart/{productId}")
    public String removeFromCart(@PathVariable("productId") int productId, Principal principal) {
        cartService.removeProduct(userService.getUserIds(principal), productId);
        return "\"Product Removed\"";
    }

    @GetMapping("/showCart")
    public List<Cart> showCart(Principal principal) {
        return cartService.showUserProducts(userService.getUserIds(principal));
    }

}
