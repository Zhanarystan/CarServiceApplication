package spring.projects.CarServiceApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import spring.projects.CarServiceApplication.entities.Cities;

import java.util.List;

@Repository
@Transactional
public interface CityRepository extends JpaRepository<Cities, Long> {
    List<Cities> findAllByIdLessThanOrderByNameAsc(Long id);
    Cities findCitiesById(Long id);
}
