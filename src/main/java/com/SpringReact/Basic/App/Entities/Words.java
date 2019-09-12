package com.SpringReact.Basic.App.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "words")
public class Words {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "word")
    private String word;

    @Column(name = "meaning")
    private String meaning;


    @JsonIgnore
    @ManyToMany(fetch=FetchType.LAZY,cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinTable(
            name = "status",
            joinColumns = @JoinColumn(name = "w_id"),
            inverseJoinColumns = @JoinColumn(name = "u_id")
    )
    private List<Users> usersList;

    public Words(){ }

    public Words(int id, String word, String meaning, List<Users> usersList) {
        this.id = id;
        this.word = word;
        this.meaning = meaning;
        this.usersList = usersList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public List<Users> getUsersList() {
        return usersList;
    }

    public void setUsersList(List<Users> usersList) {
        this.usersList = usersList;
    }

    @Override
    public String toString() {
        return "Words{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", meaning='" + meaning + '\'' +
                ", usersList=" + usersList +
                '}';
    }

    public void addUser(Users user)
    {
        if(usersList==null)
        {
            usersList = new ArrayList<>();
        }
        usersList.add(user);
    }


}
