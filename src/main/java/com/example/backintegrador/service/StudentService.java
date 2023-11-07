package com.example.backintegrador.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.backintegrador.entity.Student;
import com.example.backintegrador.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;
    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public Optional<Student> getStudent(Long id){
        return studentRepository.findById(id);
    }

    public void setOrUpdate(Student parent) {
        studentRepository.save(parent);

    }
    public void delete(long id) {
        studentRepository.deleteById(id);
    }
}