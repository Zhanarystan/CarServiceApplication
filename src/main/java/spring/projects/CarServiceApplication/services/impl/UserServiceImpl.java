package spring.projects.CarServiceApplication.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import spring.projects.CarServiceApplication.entities.Roles;
import spring.projects.CarServiceApplication.entities.Users;
import spring.projects.CarServiceApplication.repositories.RoleRepository;
import spring.projects.CarServiceApplication.repositories.UserRepository;
import spring.projects.CarServiceApplication.services.UserService;


import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(s);

        if(user!=null){
            return user;
        }
        else {
            throw new UsernameNotFoundException("USER NOT FOUND");
        }
    }

    @Override
    public Users createUser(Users user) {
        Users checkUser = userRepository.findByEmail(user.getEmail());
        if(checkUser==null){
            Roles role = roleRepository.findByRole("USER");
            if(role!=null){
                ArrayList<Roles> roles = new ArrayList<>();
                roles.add(role);
                user.setRoles(roles);
                user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
                return userRepository.save(user);
            }
        }
        return null;
    }

    @Override
    public Users findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Users findById(Long id) {
        return userRepository.findUsersById(id);
    }

    @Override
    public List<Users> findAllUsers() {
        return userRepository.findAllByIdGreaterThan(0L);
    }

    @Override
    public Users updateUser(Users user) {
        return userRepository.save(user);
    }
}
