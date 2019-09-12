package com.SpringReact.Basic.App.Respository;

import com.SpringReact.Basic.App.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersJPA extends JpaRepository<Users,Integer> {
}
