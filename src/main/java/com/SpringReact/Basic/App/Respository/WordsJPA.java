package com.SpringReact.Basic.App.Respository;

import com.SpringReact.Basic.App.Entities.Words;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordsJPA extends JpaRepository<Words,Integer> {
}
