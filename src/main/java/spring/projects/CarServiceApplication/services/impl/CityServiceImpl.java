package spring.projects.CarServiceApplication.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.projects.CarServiceApplication.entities.Cities;
import spring.projects.CarServiceApplication.repositories.CityRepository;
import spring.projects.CarServiceApplication.services.CityService;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;

    @Override
    public Cities addCity(Cities city) {
        return cityRepository.save(city);
    }

    @Override
    public List<Cities> getAllCities() {
        return cityRepository.findAllByIdLessThanOrderByNameAsc(99999999L);
    }

    @Override
    public Cities getCity(Long id) {
        return cityRepository.findCitiesById(id);
    }

    @Override
    public void deleteCity(Cities city) {
        cityRepository.delete(city);
    }

    @Override
    public Cities saveCity(Cities city) {
        return cityRepository.save(city);
    }
}
