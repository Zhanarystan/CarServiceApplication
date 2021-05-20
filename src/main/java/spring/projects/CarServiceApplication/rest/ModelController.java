package spring.projects.CarServiceApplication.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.entities.Models;
import spring.projects.CarServiceApplication.services.MakeService;
import spring.projects.CarServiceApplication.services.ModelService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/model")
public class ModelController {
    @Autowired
    private ModelService modelService;

    @Autowired
    private MakeService makeService;

    @GetMapping(value = "/all_models")
    public ResponseEntity<?> getAllModels(){
        List<Models> models = modelService.getAllModels();
        return new ResponseEntity<>(models, HttpStatus.OK);
    }

    @GetMapping(value = "/models_by_make_name/{makeName}")
    public ResponseEntity<?> getModelsByMakeName(@PathVariable(name = "makeName") String makeName){
        Makes make = makeService.getMakeByName(makeName);
        if(make != null){
            List<Models> models = modelService.getModelsByMake(make);
            return new ResponseEntity<>(models, HttpStatus.OK);
        }

        return new ResponseEntity<>("Models not found", HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/get_model_by_id/{modelId}")
    public ResponseEntity<?> getModelById(@PathVariable(name = "modelId") Long modelId){
        Models model = modelService.getModelById(modelId);

        return new ResponseEntity<>(model,HttpStatus.OK);
    }

    @GetMapping(value = "/get_model_by_name/{modelName}")
    public ResponseEntity<?> getModelByName(@PathVariable(name = "modelName") String modelName){
        Models model = modelService.getModelByName(modelName);

        return new ResponseEntity<>(model,HttpStatus.OK);
    }

    @GetMapping(value = "/get_models_by_make_id/{makeId}")
    public ResponseEntity<?> getModelsByMakeId(@PathVariable(name = "makeId") Long makeId){
        List<Models> models = modelService.getModelsByMakeId(makeId);
        return new ResponseEntity<>(models,HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> addModel(@RequestBody Models model){

        return new ResponseEntity<>(modelService.addModel(model),HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<?> updateModel(@RequestBody Models model){
        modelService.saveModel(model);
        return new ResponseEntity<>(model,HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{modelId}")
    public ResponseEntity<?> deleteModel(@PathVariable(name = "modelId") Long modelId){
        Models model = modelService.getModelById(modelId);

        if(model!=null){
            modelService.deleteModel(model);
            return new ResponseEntity<>(model,HttpStatus.OK);
        }
        return new ResponseEntity<>("Cannot find model",HttpStatus.NO_CONTENT);
    }
}
