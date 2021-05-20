package spring.projects.CarServiceApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import spring.projects.CarServiceApplication.entities.Makes;

import java.util.List;

@Repository
@Transactional
public interface MakeRepository extends JpaRepository<Makes, Long> {
    Makes findMakesByName(String name);
    Makes findMakesById(Long id);
    List<Makes> findAllByIdLessThanOrderByName(Long id);
}
