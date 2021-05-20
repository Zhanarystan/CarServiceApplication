package spring.projects.CarServiceApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import spring.projects.CarServiceApplication.entities.Users;

import java.util.List;


@Repository
@Transactional
public interface UserRepository  extends JpaRepository<Users, Long> {
    Users findByEmail(String email);
    Users findUsersById(Long id);
    List<Users> findAllByIdGreaterThan(Long id);
}
