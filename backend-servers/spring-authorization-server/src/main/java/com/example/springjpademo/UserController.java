package com.example.springjpademo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(path="/users")
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @CrossOrigin
    @PostMapping(path="/user")
    public void create(@RequestBody User user) {
        userRepository.save(user) ;
    }

    @CrossOrigin
    @GetMapping(path="/isValidToken")
    public boolean check(@RequestParam("access_token") String token) {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            if (user.getToken().equals(token)) {
                return true;
            }
        }
        return false;
    }

}
