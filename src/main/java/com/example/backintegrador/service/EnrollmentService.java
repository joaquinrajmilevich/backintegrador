package com.example.backintegrador.service;

import com.example.backintegrador.entity.Parent;
import com.example.backintegrador.entity.Student;
import com.example.backintegrador.model.EnrollmentRequest;
import com.example.backintegrador.repository.EnrollmentRepository;
import com.example.backintegrador.repository.ParentRepository;
import com.example.backintegrador.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollmentService {
    @Autowired
    private EnrollmentRepository enrollmentRepository;
    @Autowired
    private ParentRepository parentRepository;
    @Autowired
    private StudentRepository studentRepository;
    public void enrollStudent(Parent parent, Student student) {
        // Save the parent first
        parentRepository.save(parent);
        // Save the student enrollment
        studentRepository.save(student);
        enrollmentRepository.save(student);
    }
    public List<Student> getStudents(){
        return enrollmentRepository.findAll();
    }
}
