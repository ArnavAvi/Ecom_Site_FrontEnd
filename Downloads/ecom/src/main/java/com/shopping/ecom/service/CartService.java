package com.shopping.ecom.service;

import com.shopping.ecom.modal.Cart;
import com.shopping.ecom.modal.Products;
import com.shopping.ecom.modal.User;
import com.shopping.ecom.repository.CartRepository;
import com.shopping.ecom.repository.ProductRepository;
import com.shopping.ecom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    ProductRepository productsRepository;

    @Autowired
    UserRepository userRepository;
    private Object Principal;

//    @Autowired
//    OrderHistoryRepository orderHistoryRepository;


    public void addProduct(int user_id, int product_id) {

        Products products = productsRepository.findById(product_id);

        User users = userRepository.findByUserId(user_id);

        if(cartRepository.findByUsersAndProduct(users, products)!=null) {

            Cart cart = (Cart) cartRepository.findByUsersAndProduct(users, products);
            cart.setQuantity(cart.getQuantity()+1);
            cartRepository.save(cart);
        } else {
            Cart cart = new Cart(1,products, users );
            cartRepository.save(cart);
        }

        /*return cartRepository.findByUsersAndProducts(users, products);*/
    }


    public void removeProduct(int userId, int productId) {
        Products products = productsRepository.findById(productId);
        User users = userRepository.findByUserId(userId);
        cartRepository.deleteAllByUsersAndProduct(users, products);
        /*return "removed";*/
    }

    public List<Cart> showUserProducts(int userId) {
        User users = userRepository.findByUserId(userId);
        return cartRepository.findByUsers(users);
    }


    public void subtractProduct(int userId, int productId) {

        Products products = productsRepository.findById(productId);

        User users = userRepository.findByUserId(userId);

        if(cartRepository.findByUsersAndProduct(users, products)!=null) {

            Cart cart = (Cart) cartRepository.findByUsersAndProduct(users, products);
            if(cart.getQuantity()>=2) {
                cart.setQuantity(cart.getQuantity() - 1);
                cartRepository.save(cart);
            } else if(cart.getQuantity()==1) {
                removeProduct(userId, productId);
            }
        }
        /*return (Cart) cartRepository.findByUsersAndProducts(users, products);*/

    }

}
