package com.shopping.ecom.service;

import com.shopping.ecom.modal.User;
import com.shopping.ecom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Component
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User addUsers(User user) {
        user.setActive(true);
        user.setRole("user");
        return userRepository.save(user);
    }

    public List<User> show()
    {
        return userRepository.findAll();
    }

    public int getUserIds(Principal principal) {
        System.out.println("principal:" + principal);
        String email = principal.getName();/*idkwthisgName*/
        return userRepository.findByEmail(email).getUserId();
    }

    public User callUser(Principal principal) {
        return userRepository.findByEmail(principal.getName());
    }
}

