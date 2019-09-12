package com.SpringReact.Basic.App.Services;

import com.SpringReact.Basic.App.Entities.Status;
import com.SpringReact.Basic.App.Entities.Users;
import com.SpringReact.Basic.App.Entities.Words;
import com.SpringReact.Basic.App.Exceptions.UserNotFoundException;
import com.SpringReact.Basic.App.Respository.UsersJPA;
import com.SpringReact.Basic.App.Respository.WordsJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    public UsersJPA usersJPA;

    @Autowired
    public WordsJPA wordsJPA;

    public List<Users> getUsers()
    {
        return usersJPA.findAll();
    }

    public Users getUserById(int id)
    {
        return usersJPA.findById(id).get();
    }

    public Users save(Users user)
    {
        usersJPA.save(user);
        return user;
    }

    public void addWord(Status status)
    {
        Users user = usersJPA.findById(status.getU_id()).get();
        Words word = wordsJPA.findById(status.getW_id()).get();
       try {
           user.addWord(word);
//        word.addUser(user);
           usersJPA.save(user);
       }
       catch(Exception e)
       {
           throw new UserNotFoundException("cannot add word");
       }
//        wordsJPA.save(word);
    }

    public void removeWord(Status status)
    {
        Users user = usersJPA.findById(status.getU_id()).get();
        Words word = wordsJPA.findById(status.getW_id()).get();

        user.getWordsList().remove(word);
//        word.getUsersList().remove(user);
        usersJPA.save(user);
//        wordsJPA.save(word);
    }

}
