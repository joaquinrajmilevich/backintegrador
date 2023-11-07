package com.example.backintegrador.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.backintegrador.entity.Parent;
import com.example.backintegrador.repository.ParentRepository;

@Service
public class ParentService {
    @Autowired
    ParentRepository parentRepository;
    public List<Parent> getParents(){
        return parentRepository.findAll();
    }

    public Optional<Parent> getParent(Long id){
        return parentRepository.findById(id);
    }

    public void setOrUpdate(Parent parent) {
        parentRepository.save(parent);

    }
    public void delete(long id) {
        parentRepository.deleteById(id);
    }
}

