package com.SpringReact.Basic.App.Controllers;

import com.SpringReact.Basic.App.Services.WordsService;
import com.SpringReact.Basic.App.Utilities.PopulateDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

@Controller
@RequestMapping("/home")
public class Home {

    @Autowired
    public WordsService wordsService;

    @RequestMapping("/")
    public String populateDB() throws IOException {
        new PopulateDB().fill(wordsService);
        return "Welcome";
    }

}
