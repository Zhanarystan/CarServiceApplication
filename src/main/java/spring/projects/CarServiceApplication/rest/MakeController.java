package spring.projects.CarServiceApplication.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.Cities;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.services.MakeService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/make")
public class MakeController {
    @Autowired
    private MakeService makeService;

    @GetMapping(value = "/all_makes")
    public ResponseEntity<?> getAllMakes(){
        List<Makes> makes = makeService.getAllMakes();
        return new ResponseEntity<>(makes, HttpStatus.OK);
    }

    @GetMapping(value = "/get_make_by_id/{makeId}")
    public ResponseEntity<?> getMakeById(@PathVariable(name = "makeId") Long makeId){
        Makes make = makeService.getMakeById(makeId);

        return new ResponseEntity<>(make,HttpStatus.OK);
    }

    @GetMapping(value = "/get_make_by_name/{makeName}")
    public ResponseEntity<?> getMakeByName(@PathVariable(name = "makeName") String makeName){
        Makes make = makeService.getMakeByName(makeName);

        return new ResponseEntity<>(make,HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> addMake(@RequestBody Makes make){

        return new ResponseEntity<>(makeService.addMake(make),HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<?> updateMake(@RequestBody Makes make){
        makeService.saveMake(make);
        return new ResponseEntity<>(make,HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{makeId}")
    public ResponseEntity<?> deleteMake(@PathVariable(name = "makeId") Long makeId){
        Makes make = makeService.getMakeById(makeId);

        if(make!=null){
            makeService.deleteMake(make);
            return new ResponseEntity<>(make,HttpStatus.OK);
        }
        return new ResponseEntity<>("Cannot find city",HttpStatus.NO_CONTENT);
    }

}
