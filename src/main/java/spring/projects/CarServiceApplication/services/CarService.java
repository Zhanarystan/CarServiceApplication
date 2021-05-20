package spring.projects.CarServiceApplication.services;

import org.dom4j.rule.Mode;
import spring.projects.CarServiceApplication.entities.*;
import spring.projects.CarServiceApplication.models.SearchingProperties;

import java.util.List;

public interface CarService {
    Cars addCars(Cars car);
    List<Cars> getAllCars();
    List<Cars> getCarsByMake(Makes make);
    Cars getCarById(Long id);
    List<Cars> getCarsByModel(Models model);
    void deleteCar(Cars car);
    Cars saveCar(Cars car);

    List<Cars> getCarsByUser(Users user);

    List<Cars> getFilteredCars(SearchingProperties sp);
}
