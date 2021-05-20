package spring.projects.CarServiceApplication.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.entities.Pictures;
import spring.projects.CarServiceApplication.repositories.PictureRepository;
import spring.projects.CarServiceApplication.services.PictureService;

@Service
public class PictureServiceImpl implements PictureService {

    @Autowired
    private PictureRepository pictureRepository;

    @Override
    public Pictures addPicture(Pictures picture) {
        return pictureRepository.save(picture);
    }

    @Override
    public Pictures getPictureById(Long id) {
        return pictureRepository.findPicturesById(id);
    }

    @Override
    public void deletePicture(Pictures picture) {
        pictureRepository.delete(picture);
    }

    @Override
    public Pictures savePicture(Pictures picture) {
        return pictureRepository.save(picture);
    }
}
