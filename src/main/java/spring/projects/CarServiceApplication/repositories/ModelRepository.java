package spring.projects.CarServiceApplication.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.entities.Models;

import java.util.List;

@Repository
@Transactional
public interface ModelRepository extends JpaRepository<Models, Long> {
    List<Models> findAllByIdLessThanOrderByName(Long id);
    List<Models> findAllByMakeEqualsOrderByName(Makes make);
    List<Models> findAllByMakeIdEqualsOrderByName(Long id);
    Models findModelsById(Long id);
    Models findModelsByName(String name);

}
