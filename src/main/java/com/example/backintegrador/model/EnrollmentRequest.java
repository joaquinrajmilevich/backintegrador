package com.example.backintegrador.model;

import com.example.backintegrador.entity.Parent;
import com.example.backintegrador.entity.Student;
import jakarta.validation.Valid;

public class EnrollmentRequest {
    @Valid
    private Parent parent;
    @Valid
    private Student student;

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
