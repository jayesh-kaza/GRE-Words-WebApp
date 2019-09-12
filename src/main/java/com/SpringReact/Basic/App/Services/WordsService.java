package com.SpringReact.Basic.App.Services;

import com.SpringReact.Basic.App.Entities.Words;
import com.SpringReact.Basic.App.Respository.WordsJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WordsService {

    @Autowired
    public WordsJPA wordsJPA;


    public List<Words> getAllWords()
    {
        return wordsJPA.findAll();
    }

    public Words getWordById(int id)
    {
        Words word = wordsJPA.findById(id).get();
        return word;
    }

    public void saveWord(Words word)
    {
        wordsJPA.save(word);
    }
}
