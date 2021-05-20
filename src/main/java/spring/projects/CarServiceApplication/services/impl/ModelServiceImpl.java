package spring.projects.CarServiceApplication.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.entities.Models;
import spring.projects.CarServiceApplication.repositories.ModelRepository;
import spring.projects.CarServiceApplication.services.ModelService;

import java.util.List;

@Service
public class ModelServiceImpl implements ModelService {

    @Autowired
    private ModelRepository modelRepository;

    @Override
    public Models addModel(Models model) {
        return modelRepository.save(model);
    }

    @Override
    public List<Models> getAllModels() {
        return modelRepository.findAllByIdLessThanOrderByName(99999999L);
    }

    @Override
    public List<Models> getModelsByMake(Makes make) {
        return modelRepository.findAllByMakeEqualsOrderByName(make);
    }

    @Override
    public List<Models> getModelsByMakeId(Long id) {
        return modelRepository.findAllByMakeIdEqualsOrderByName(id);
    }

    @Override
    public Models getModelById(Long id) {
        return modelRepository.findModelsById(id);
    }

    @Override
    public Models getModelByName(String name) {
        return modelRepository.findModelsByName(name);
    }

    @Override
    public void deleteModel(Models model) {
        modelRepository.delete(model);
    }

    @Override
    public Models saveModel(Models model) {
        return modelRepository.save(model);
    }
}
