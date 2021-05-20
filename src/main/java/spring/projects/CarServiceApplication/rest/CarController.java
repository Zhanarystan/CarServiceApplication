package spring.projects.CarServiceApplication.rest;


import org.dom4j.rule.Mode;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.*;
import spring.projects.CarServiceApplication.models.*;
import spring.projects.CarServiceApplication.services.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/car")
public class CarController {
    @Autowired
    private CityService cityService;

    @Autowired
    private MakeService makeService;

    @Autowired
    private ModelService modelService;

    @Autowired
    private UserService userService;

    @Autowired
    private CarService carService;

    @GetMapping(value = "/all_cars")
    public ResponseEntity<?> getAllCars(){
        List<Cars> cars = carService.getAllCars();
        List<CarsDTO> carsDTOS = new ArrayList<>();
        for(Cars car: cars){
            CarsDTO carDTO = new CarsDTO();
            carDTO.setId(car.getId());
            carDTO.setMake(car.getMake().getName());
            carDTO.setModel(car.getModel().getName());
            carDTO.setCity(car.getCity().getName());
            carDTO.setPrice(car.getPrice());
            carDTO.setManufacturedYear(car.getManufacturedYear());
            carDTO.setImageAmount(car.getPictures().size());
            if(car.getMainPictureUrl()!=null){
                carDTO.setImageAmount(carDTO.getImageAmount()+1);
            }
            carsDTOS.add(carDTO);
        }
        return new ResponseEntity<>(carsDTOS, HttpStatus.OK);
    }

    @GetMapping(value = "/cars_by_make_name/{makeName}")
    public ResponseEntity<?> getCarsByMakeName(@PathVariable(name = "makeName") String makeName){
        Makes make = makeService.getMakeByName(makeName);
        if(make != null){
            List<Cars> cars = carService.getCarsByMake(make);
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }

        return new ResponseEntity<>("Cars not found", HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/cars_by_model_name/{modelName}")
    public ResponseEntity<?> getCarsByModelName(@PathVariable(name = "modelName") String modelName){
        Models model = modelService.getModelByName(modelName);
        if(model != null){
            List<Cars> cars = carService.getCarsByModel(model);
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }
        return new ResponseEntity<>("Cars not found", HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/get_car_by_id/{carId}")
    public ResponseEntity<?> getCarById(@PathVariable(name = "carId") Long carId){
        Cars car = carService.getCarById(carId);
        return new ResponseEntity<>(car,HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> addCar(@RequestBody CreatingEditingCarDTO carDTO){
        Cars car = new Cars();

        Cities city = cityService.getCity(carDTO.getCityId());
        Makes make = makeService.getMakeById(carDTO.getMakeId());
        Models model = modelService.getModelById(carDTO.getModelId());
        Users user = userService.findById(carDTO.getCreatorId());

        car.setCity(city);
        car.setMake(make);
        car.setModel(model);
        car.setPostedBy(user);
        car.setPrice(carDTO.getPrice());
        car.setManufacturedYear(carDTO.getManufacturedYear());
        car.setNew(carDTO.isNew());
        car.setCountry(carDTO.getCountry());
        car.setCarcaseType(carDTO.getCarcaseType());
        car.setEngineType(carDTO.getEngineType());
        car.setEngineVolume(carDTO.getEngineVolume());
        car.setGearbox(carDTO.getGearbox());
        car.setColor(carDTO.getColor());
        car.setDescription(carDTO.getDescription());
        car.setInitialFee(carDTO.getInitialFee());

        return new ResponseEntity<>(carService.addCars(car),HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<?> updateCar(@RequestBody CreatingEditingCarDTO carDTO){
        Cars car = carService.getCarById(carDTO.getId());
        if(car!=null) {

            Cities city = cityService.getCity(carDTO.getCityId());
            Makes make = makeService.getMakeById(carDTO.getMakeId());
            Models model = modelService.getModelById(carDTO.getModelId());
            Users user = userService.findById(carDTO.getCreatorId());

            car.setCity(city);
            car.setMake(make);
            car.setModel(model);
            car.setPostedBy(user);
            car.setPrice(carDTO.getPrice());
            car.setManufacturedYear(carDTO.getManufacturedYear());
            car.setNew(carDTO.isNew());
            car.setCountry(carDTO.getCountry());
            car.setCarcaseType(carDTO.getCarcaseType());
            car.setEngineType(carDTO.getEngineType());
            car.setEngineVolume(carDTO.getEngineVolume());
            car.setGearbox(carDTO.getGearbox());
            car.setColor(carDTO.getColor());
            car.setDescription(carDTO.getDescription());
            car.setInitialFee(carDTO.getInitialFee());
        }
        carService.saveCar(car);
        return new ResponseEntity<>(carDTO,HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{carId}")
    public ResponseEntity<?> deleteCar(@PathVariable(name = "carId") Long carId){
        Cars car = carService.getCarById(carId);
        if(car!=null){
            carService.deleteCar(car);
            return new ResponseEntity<>(car,HttpStatus.OK);
        }
        return new ResponseEntity<>("Cannot find car",HttpStatus.NO_CONTENT);
    }

    @PostMapping(value = "/get_filtered_cars")
    public ResponseEntity<?> getFilteredCars(@RequestBody SearchingProperties sp){
        List<CarsDTO> cars = mapToCarsDTO(carService.getFilteredCars(sp));

        return new ResponseEntity<>(cars,HttpStatus.OK);
    }

    @GetMapping(value = "/car_details/{id}")
    public ResponseEntity<?> getCarDetails(@PathVariable(name = "id") Long id){
        Cars car = carService.getCarById(id);
        if(car!=null){
            CarsDTO carDTO = new CarsDTO();

            carDTO.setId(car.getId());
            carDTO.setMake(car.getMake().getName());
            carDTO.setModel(car.getModel().getName());
            carDTO.setCity(car.getCity().getName());
            Users user = car.getPostedBy();
            UserDTO userDTO = new UserDTO(user.getId(),user.getEmail(),user.getFirstName(),user.getLastName(),
                                            user.getPhoneNumber(),user.getRoles());
            carDTO.setPostedBy(userDTO);
            carDTO.setMainPictureUrl(car.getMainPictureUrl());
            carDTO.setPictures(car.getPictures());
            carDTO.setPostedDate(car.getPostedDate());
            carDTO.setPrice(car.getPrice());
            carDTO.setManufacturedYear(car.getManufacturedYear());
            carDTO.setNew(car.isNew());
            carDTO.setCountry(car.getCountry());
            carDTO.setCarcaseType(car.getCarcaseType());
            carDTO.setEngineType(car.getEngineType());
            carDTO.setEngineVolume(car.getEngineVolume());
            carDTO.setGearbox(car.getGearbox());
            carDTO.setColor(car.getColor());
            carDTO.setDescription(car.getDescription());
            carDTO.setViewAmount(car.getViewAmount());
            carDTO.setInitialFee(car.getInitialFee());

            return new ResponseEntity<>(carDTO,HttpStatus.OK);
        }

        return new ResponseEntity<>(new Message("Car not found"),HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/get_cars_by_user/{id}")
    public ResponseEntity<?> getCarsByUser(@PathVariable(name = "id") Long id){
        Users user = userService.findById(id);

        List<Cars> cars = carService.getCarsByUser(user);

        List<CarsDTO> carsDTOS = mapToCarsDTO(cars);

        return new ResponseEntity<>(carsDTOS, HttpStatus.OK);
    }

    public static ArrayList<CarsDTO> mapToCarsDTO(List<Cars> cars){
        ArrayList<CarsDTO> carsDTOS = new ArrayList<>();

        for(Cars car: cars){
            CarsDTO carDto = new CarsDTO();
            carDto.setId(car.getId());
            carDto.setMake(car.getMake().getName());
            carDto.setModel(car.getModel().getName());
            carDto.setCity(car.getCity().getName());
            carDto.setMainPictureUrl(car.getMainPictureUrl());
            carDto.setPrice(car.getPrice());
            carDto.setManufacturedYear(car.getManufacturedYear());
            int imagesCount = car.getPictures().size();
            if(car.getMainPictureUrl()!=null){
                imagesCount++;
            }
            carDto.setImageAmount(imagesCount);
            carDto.setDescription(car.getDescription());
            carDto.setViewAmount(car.getViewAmount());
            carDto.setInitialFee(car.getInitialFee());
            carsDTOS.add(carDto);
        }

        return carsDTOS;
    }



}
