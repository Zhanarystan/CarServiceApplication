package spring.projects.CarServiceApplication.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationDTO implements Serializable {
    private String email;
    private String oldPassword;
    private String password;
    private String rePassword;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String message;
    private boolean success;

}
