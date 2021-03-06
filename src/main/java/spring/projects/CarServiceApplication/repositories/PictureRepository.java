package spring.projects.CarServiceApplication.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import spring.projects.CarServiceApplication.entities.Pictures;

@Repository
@Transactional
public interface PictureRepository extends JpaRepository<Pictures,Long> {
    Pictures findPicturesById(Long id);
}
