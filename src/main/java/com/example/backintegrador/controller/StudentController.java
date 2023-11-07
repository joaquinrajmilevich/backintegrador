package com.example.backintegrador.controller;
import com.example.backintegrador.entity.Student;
import com.example.backintegrador.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {
    @Autowired
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getStudents();
        if (students.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(students);
        }
    }
    @GetMapping("/{parent_id}")
    public Optional<Student> getById(@PathVariable("parent_id") Long studentId){
        return studentService.getStudent(studentId);
    }
    @PostMapping
    public void setUpdateStudent(@RequestBody Student student){
        studentService.setOrUpdate(student);
    }
    @DeleteMapping("/{student_id}")
    public void deleteStudent(@PathVariable("student_id") Long studentId){
        studentService.delete(studentId);
    }
}
