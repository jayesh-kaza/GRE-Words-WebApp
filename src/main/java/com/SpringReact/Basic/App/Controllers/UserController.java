package com.SpringReact.Basic.App.Controllers;

import com.SpringReact.Basic.App.Entities.Status;
import com.SpringReact.Basic.App.Entities.Users;
import com.SpringReact.Basic.App.Entities.Words;
import com.SpringReact.Basic.App.Exceptions.UserNotFoundException;
import com.SpringReact.Basic.App.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    public UserService userService;

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Users> getAllUsers()
    {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Users getUserById(@PathVariable int userId)
    {
        return userService.getUserById(userId);
    }

    @GetMapping("/words/{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Words> getWordsLearnedByUser(@PathVariable int userId)
    {
        return userService.getUserById(userId).getWordsList();
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public Users checkUser(@RequestBody Users user)
    {
        user.setId(0);
        List<Users> usersList = userService.getUsers();
        for(Users user1 : usersList)
        {
            if(user1.getName().equals(user.getName()) && user1.getPassword().equals(user.getPassword()))
                return user1;
        }
        throw new UserNotFoundException("User not found");

    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public Users addUser(@RequestBody Users user)
    {
        int x = (int)(Math.random()*100);
        user.setId(x);
        userService.save(user);
        return user;
    }

    @PostMapping("/addWord")
    @CrossOrigin(origins = "http://localhost:3000")
    public String addWords(@RequestBody Status status)
    {
        System.out.println(status);
        userService.addWord(status);
        return "word-added";
    }


    @PostMapping("/removeWord")
    @CrossOrigin(origins = "http://localhost:3000")
    public String removeWords(@RequestBody Status status)
    {
        System.out.println(status);
        userService.removeWord(status);
        return "word_removed";
    }


}
