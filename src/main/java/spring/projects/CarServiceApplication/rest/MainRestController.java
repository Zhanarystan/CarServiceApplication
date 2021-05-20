package spring.projects.CarServiceApplication.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.Cars;
import spring.projects.CarServiceApplication.entities.Users;
import spring.projects.CarServiceApplication.models.CarsDTO;
import spring.projects.CarServiceApplication.models.RegistrationDTO;
import spring.projects.CarServiceApplication.models.UserDTO;
import spring.projects.CarServiceApplication.services.CarService;
import spring.projects.CarServiceApplication.services.UserService;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class MainRestController {

    @Autowired
    private UserService userService;

    @Autowired
    private CarService carService;

    @GetMapping(value = "/profile")
    public ResponseEntity<?> profilePage(){
        Users user = getUser();
        return new ResponseEntity<>(new UserDTO(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName(),
                user.getPhoneNumber(), user.getRoles()), HttpStatus.OK);
    }

    @PostMapping(value = "/update-profile")
    public ResponseEntity<?> updateProfile(@RequestBody RegistrationDTO updated){
        Users user = userService.findByEmail(updated.getEmail());
        if(user!=null){
            user.setFirstName(updated.getFirstName());
            user.setLastName(updated.getLastName());
            user.setPhoneNumber(updated.getPhoneNumber());
            updated.setSuccess(true);
            updated.setMessage("Updated");
            userService.updateUser(user);
        }
        return ResponseEntity.ok(updated);
    }

    @PostMapping(value = "/update-password")
    public ResponseEntity<?> updatePassword(@RequestBody RegistrationDTO updated){
        Users user = userService.findByEmail(updated.getEmail());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String error = "Incorrect old password";

        if(user!=null){
            if(encoder.matches(updated.getOldPassword(),user.getPassword())){
                error = "Password confirmation doesn't match with new password";

                if(updated.getPassword().equals(updated.getRePassword())){
                    error="Successfully updated";
                    user.setPassword(encoder.encode(updated.getPassword()));
                    updated.setSuccess(true);
                    userService.updateUser(user);
                }
            }
        }
        updated.setMessage(error);
        return ResponseEntity.ok(updated);
    }


    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            Users user = (Users) authentication.getPrincipal();
            System.out.println("I WAS HERE1");
            return user;
        }
        System.out.println("I WAS HERE RETURN NULL");
        return null;
    }
}
