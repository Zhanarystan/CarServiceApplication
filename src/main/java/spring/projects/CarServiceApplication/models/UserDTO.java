package spring.projects.CarServiceApplication.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import spring.projects.CarServiceApplication.entities.Roles;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements Serializable {

    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private List<Roles> roles;

}
