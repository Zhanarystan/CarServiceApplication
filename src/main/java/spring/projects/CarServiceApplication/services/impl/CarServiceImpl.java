package spring.projects.CarServiceApplication.services.impl;

import org.dom4j.rule.Mode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.projects.CarServiceApplication.entities.*;
import spring.projects.CarServiceApplication.models.SearchingProperties;
import spring.projects.CarServiceApplication.repositories.CarRepository;
import spring.projects.CarServiceApplication.repositories.CityRepository;
import spring.projects.CarServiceApplication.repositories.MakeRepository;
import spring.projects.CarServiceApplication.repositories.ModelRepository;
import spring.projects.CarServiceApplication.services.CarService;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private MakeRepository makeRepository;

    @Autowired
    private ModelRepository modelRepository;

    @Override
    public Cars addCars(Cars car) {
        return carRepository.save(car);
    }

    @Override
    public List<Cars> getAllCars() {
        return carRepository.findAllByIdGreaterThanOrderByPostedDateDesc(0L);
    }

    @Override
    public List<Cars> getCarsByMake(Makes make) {
        return carRepository.findAllByMakeEqualsOrderByPostedDateDesc(make);
    }

    @Override
    public Cars getCarById(Long id) {
        return carRepository.findCarsById(id);
    }

    @Override
    public List<Cars> getCarsByModel(Models model) {
        return carRepository.findAllByModelEqualsOrderByPostedDateDesc(model);
    }

    @Override
    public void deleteCar(Cars car) {
        carRepository.delete(car);
    }

    @Override
    public Cars saveCar(Cars car) {
        return carRepository.save(car);
    }

    @Override
    public List<Cars> getHotOffers() {
        return carRepository.findAllByViewAmountGreaterThanOrderByPostedDateDesc(5);
    }

    @Override
    public List<Cars> getCarsByUser(Users user) {
        return carRepository.findAllByPostedByEqualsOrderByPostedDateDesc(user);
    }


    @Override
    public List<Cars> getFilteredCars(SearchingProperties sp) {
        List<Cars> cars = carRepository.findAllByIdGreaterThanOrderByPostedDateDesc(0L);
        Cities city = cityRepository.findCitiesById(sp.getCityId());
        Makes make = makeRepository.findMakesById(sp.getMakeId());
        Models model = modelRepository.findModelsById(sp.getModelId());

        if(city!=null){
            cars = cars.stream().filter(c -> c.getCity() == city).collect(Collectors.toList());
        }
        if(model!=null){
            cars = cars.stream().filter(c -> c.getModel() == model).collect(Collectors.toList());
        }
        if(make!=null){
            cars = cars.stream().filter(c -> c.getMake() == make).collect(Collectors.toList());
        }
        if(sp.getYearFrom()!=null){
            cars = cars.stream().filter(c -> c.getManufacturedYear() >= sp.getYearFrom()).collect(Collectors.toList());
        }
        if(sp.getYearTo()!=null){
            cars = cars.stream().filter(c -> c.getManufacturedYear() < sp.getYearTo()).collect(Collectors.toList());
        }
        if(sp.getPriceFrom()!=null){
            cars = cars.stream().filter(c -> c.getPrice() >= sp.getPriceFrom()).collect(Collectors.toList());
        }
        if(sp.getPriceTo()!=null){
            cars = cars.stream().filter(c -> c.getPrice() < sp.getPriceTo()).collect(Collectors.toList());
        }
        if(sp.getCountry()!=null){
            cars = cars.stream().filter(c -> c.getCountry().equals(sp.getCountry())).collect(Collectors.toList());
        }
        if(sp.getCarcaseType()!=null){
            cars = cars.stream().filter(c -> c.getCarcaseType().equals(sp.getCarcaseType())).collect(Collectors.toList());
        }
        if(sp.getEngineType()!=null){
            cars = cars.stream().filter(c -> c.getEngineType().equals(sp.getEngineType())).collect(Collectors.toList());
        }
        if(sp.getEngineVolumeFrom()!=null){
            cars = cars.stream().filter(c -> c.getEngineVolume() >= sp.getEngineVolumeFrom()).collect(Collectors.toList());
        }
        if(sp.getEngineVolumeTo()!=null){
            cars = cars.stream().filter(c -> c.getEngineVolume() < sp.getEngineVolumeTo()).collect(Collectors.toList());
        }
        if(sp.getGearbox()!=null){
            cars = cars.stream().filter(c -> c.getGearbox().equals(sp.getGearbox())).collect(Collectors.toList());
        }
        if(sp.getColor()!=null){
            cars = cars.stream().filter(c -> c.getColor().equals(sp.getColor())).collect(Collectors.toList());
        }

        return cars;
    }


}
