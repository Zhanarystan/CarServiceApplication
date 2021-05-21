package spring.projects.CarServiceApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import spring.projects.CarServiceApplication.entities.*;

import java.util.List;

@Repository
@Transactional
public interface CarRepository extends JpaRepository<Cars, Long> {
    List<Cars> findAllByIdGreaterThanOrderByPostedDateDesc(Long id);

    List<Cars> findAllByViewAmountGreaterThanOrderByViewAmount(int viewAmount);

    List<Cars> findAllByMakeEqualsOrderByPostedDateDesc(Makes make);
    List<Cars> findAllByModelEqualsOrderByPostedDateDesc(Models model);

    List<Cars> findCarsByCityEqualsOrderByPostedDateDesc(Cities city);

    List<Cars> findCarsByCityEqualsOrCityNotNullOrderByPostedDateDesc(Cities city);

    List<Cars> findCarsByMakeEqualsOrMakeNotNullOrderByPostedDateDesc(Makes make);

    List<Cars> findCarsByModelEqualsOrModelNotNullOrderByPostedDateDesc(Models model);

    List<Cars> findAllByPostedByEqualsOrderByPostedDateDesc(Users user);

    List<Cars> findAllByViewAmountGreaterThanOrderByPostedDateDesc(int viewAmount);
    Cars findCarsById(Long id);
}
