package com.example.backintegrador.controller;

import com.example.backintegrador.entity.Parent;
import com.example.backintegrador.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/parents")
public class ParentController {
    @Autowired
    private final ParentService parentService;

    public ParentController(ParentService parentService) {
        this.parentService = parentService;
    }
    @GetMapping
    public List<Parent> getAll(){
        return parentService.getParents();
    }
    @GetMapping("/{parent_id}")
    public Optional<Parent> getById(@PathVariable("parent_id") Long parentId){
        return parentService.getParent(parentId);
    }
    @PostMapping
    public void setUpdateParent(@RequestBody Parent parent){
        parentService.setOrUpdate(parent);
    }
    @DeleteMapping("/{parent_id}")
    public void deleteParent(@PathVariable("parent_id") Long parentId){
        parentService.delete(parentId);
    }
}
