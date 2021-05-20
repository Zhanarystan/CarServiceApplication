package spring.projects.CarServiceApplication.services;


import org.dom4j.rule.Mode;
import org.springframework.ui.Model;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.entities.Models;

import java.util.List;

public interface ModelService {
    Models addModel(Models model);
    List<Models> getAllModels();
    List<Models> getModelsByMake(Makes make);
    List<Models> getModelsByMakeId(Long id);
    Models getModelById(Long id);
    Models getModelByName(String name);
    void deleteModel(Models model);
    Models saveModel(Models model);
}
