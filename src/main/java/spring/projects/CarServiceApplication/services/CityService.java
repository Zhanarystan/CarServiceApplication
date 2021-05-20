package spring.projects.CarServiceApplication.services;


import spring.projects.CarServiceApplication.entities.Cities;

import java.util.List;

public interface CityService {
    Cities addCity(Cities city);
    List<Cities> getAllCities();
    Cities getCity(Long id);
    void deleteCity(Cities city);
    Cities saveCity(Cities city);


}
