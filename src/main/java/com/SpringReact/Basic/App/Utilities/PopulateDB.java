package com.SpringReact.Basic.App.Utilities;

import com.SpringReact.Basic.App.Entities.Words;
import com.SpringReact.Basic.App.Services.WordsService;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;


public class PopulateDB {

    public void fill(WordsService wordsService) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        Words[] words = objectMapper.readValue(new File("/home/user/Documents/Basic-App/src/main/java/com/SpringReact/Basic/App/Utilities/data.json"),Words[].class);
        for(Words word: words)
        {
            wordsService.saveWord(word);
        }
    }



}
