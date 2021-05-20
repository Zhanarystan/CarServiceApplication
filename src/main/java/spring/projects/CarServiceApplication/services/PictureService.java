package spring.projects.CarServiceApplication.services;


import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.entities.Pictures;

import java.util.List;

public interface PictureService {
    Pictures addPicture(Pictures picture);
    Pictures getPictureById(Long id);
    void deletePicture(Pictures picture);
    Pictures savePicture(Pictures picture);
}
