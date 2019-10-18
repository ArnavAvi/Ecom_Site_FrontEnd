package com.shopping.ecom.controller;

import com.shopping.ecom.modal.User;
import com.shopping.ecom.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value="/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/adduser")
    public User addUser(@RequestBody User users)
    {
        return userService.addUsers(users);
    }

    @GetMapping("/all")
    public List<User> shows()
    {
        return userService.show();
    }

    /*@GetMapping("/checkUser")
    public String check()
    {
        return "\"valid\"";
    }*/

    @GetMapping("/findUser")
    public User findUsers(Principal principal)
    {
        return userService.callUser(principal);
    }

    @GetMapping("/checkUser")
    public String check()
    {
        return "\"valid\"";
    }
}
