package spring.projects.CarServiceApplication.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.Cars;
import spring.projects.CarServiceApplication.entities.Pictures;
import spring.projects.CarServiceApplication.services.CarService;
import spring.projects.CarServiceApplication.services.PictureService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/picture")
public class PictureController {

    @Autowired
    private CarService carService;

    @Autowired
    private PictureService pictureService;

    @GetMapping(value = "/get_picture_by_id/{pictureId}")
    public ResponseEntity<?> getCarById(@PathVariable(name = "pictureId") Long pictureId){
        Pictures picture = pictureService.getPictureById(pictureId);
        return new ResponseEntity<>(picture,HttpStatus.OK);
    }

    @PostMapping(value = "/create_on_car/{carId}")
    public ResponseEntity<?> addPicture(@PathVariable(name = "carId") Long carId,
                                        @RequestBody Pictures picture){
        Cars car = carService.getCarById(carId);
        Pictures createdPicture = null;
        if(car != null){
            createdPicture = pictureService.addPicture(picture);
            car.getPictures().add(createdPicture);
            carService.saveCar(car);
        }
        return new ResponseEntity<>(createdPicture,HttpStatus.OK);
    }

    @PostMapping(value = "/delete_on_car/{carId}")
    public ResponseEntity<?> deletePicture(@PathVariable(name = "carId") Long carId,
                                        @RequestBody Pictures picture){
        Cars car = carService.getCarById(carId);

        if(car != null){
            car.getPictures().remove(picture);
            pictureService.deletePicture(picture);
            carService.saveCar(car);
        }
        return new ResponseEntity<>(picture,HttpStatus.OK);
    }
}
