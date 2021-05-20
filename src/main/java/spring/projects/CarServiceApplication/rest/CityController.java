package spring.projects.CarServiceApplication.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.Cities;
import spring.projects.CarServiceApplication.services.CityService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/city")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping(value = "/all_cities")
    public ResponseEntity<?> getAllCities(){
        List<Cities> cities = cityService.getAllCities();
        return new ResponseEntity<>(cities, HttpStatus.OK);
    }

    @GetMapping(value = "/{cityId}")
    public ResponseEntity<?> getCity(@PathVariable(name = "cityId") Long cityId){
        Cities city = cityService.getCity(cityId);

        return new ResponseEntity<>(city,HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> addCity(@RequestBody Cities city){

        return new ResponseEntity<>(cityService.addCity(city),HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<?> updateCity(@RequestBody Cities city){
        cityService.saveCity(city);
        return new ResponseEntity<>(city,HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{cityId}")
    public ResponseEntity<?> deleteCity(@PathVariable(name = "cityId") Long cityId){
        Cities city = cityService.getCity(cityId);

        if(city!=null){
            cityService.deleteCity(city);
            return new ResponseEntity<>(city,HttpStatus.OK);
        }
        return new ResponseEntity<>("Cannot find city",HttpStatus.NO_CONTENT);
    }


}
