package spring.projects.CarServiceApplication.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.Models;
import spring.projects.CarServiceApplication.entities.Users;
import spring.projects.CarServiceApplication.services.CarService;
import spring.projects.CarServiceApplication.services.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/all_users")
    public ResponseEntity<?> getAllUsers(){
        List<Users> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getUser(@PathVariable(name = "id") Long id){
        Users user = userService.findById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
