package spring.projects.CarServiceApplication.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.projects.CarServiceApplication.entities.Makes;
import spring.projects.CarServiceApplication.repositories.MakeRepository;
import spring.projects.CarServiceApplication.services.MakeService;

import java.util.List;

@Service
public class MakeServiceImpl implements MakeService {

    @Autowired
    private MakeRepository makeRepository;

    @Override
    public Makes addMake(Makes make) {
        return makeRepository.save(make);
    }

    @Override
    public List<Makes> getAllMakes() {
        return makeRepository.findAllByIdLessThanOrderByName(99999999L);
    }

    @Override
    public Makes getMakeById(Long id) {
        return makeRepository.findMakesById(id);
    }

    @Override
    public Makes getMakeByName(String name) {
        return makeRepository.findMakesByName(name);
    }

    @Override
    public void deleteMake(Makes make) {
        makeRepository.delete(make);
    }

    @Override
    public Makes saveMake(Makes make) {
        return makeRepository.save(make);
    }
}
