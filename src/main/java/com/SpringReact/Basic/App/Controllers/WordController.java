package com.SpringReact.Basic.App.Controllers;

import com.SpringReact.Basic.App.Entities.Users;
import com.SpringReact.Basic.App.Entities.Words;
import com.SpringReact.Basic.App.Services.WordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/words")
public class WordController {

    @Autowired
    public WordsService wordsService;

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Words> getWords()
    {
        return wordsService.getAllWords();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{wordId}")
    public Words getWord(@PathVariable int wordId)
    {
        return wordsService.getWordById(wordId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/{wordId}")
    public List<Users> getUsersWhoKnowTheWord(@PathVariable int wordId)
    {
        return wordsService.getWordById(wordId).getUsersList();
    }
}
