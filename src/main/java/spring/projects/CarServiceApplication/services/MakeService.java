package spring.projects.CarServiceApplication.services;

import spring.projects.CarServiceApplication.entities.Cities;
import spring.projects.CarServiceApplication.entities.Makes;

import java.util.List;

public interface MakeService {
    Makes addMake(Makes make);
    List<Makes> getAllMakes();
    Makes getMakeById(Long id);
    Makes getMakeByName(String name);
    void deleteMake(Makes make);
    Makes saveMake(Makes make);
}
