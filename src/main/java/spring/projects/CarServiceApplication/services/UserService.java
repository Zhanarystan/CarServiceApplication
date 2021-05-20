package spring.projects.CarServiceApplication.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import spring.projects.CarServiceApplication.entities.Users;

import java.util.List;


public interface UserService extends UserDetailsService {
    Users createUser(Users user);
    Users updateUser(Users user);
    Users findByEmail(String email);
    Users findById(Long id);
    List<Users> findAllUsers();
}
