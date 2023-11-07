package com.example.backintegrador.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    @JsonIgnore
    private Parent parent;
    @NotEmpty
    @Pattern(regexp = "^[A-Za-z]*$\n*", message = "Nombre alumno incorrecto")
    private String studentFirstName;
    @NotEmpty
    @Pattern(regexp = "^[A-Za-z]*$\n*", message = "Apellido alumno incorrecto")
    private String studentLastName;

    @Enumerated(EnumType.STRING)
    private Shift shift;

    // Getters and setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }

    public String getStudentFirstName() {
        return studentFirstName;
    }

    public void setStudentFirstName(String studentFirstName) {
        this.studentFirstName = studentFirstName;
    }

    public String getStudentLastName() {
        return studentLastName;
    }

    public void setStudentLastName(String studentLastName) {
        this.studentLastName = studentLastName;
    }

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }
    public Student(){}
    public Student(Long id, Parent parent, String studentFirstName, String studentLastName, Shift shift) {
        this.id = id;
        this.parent = parent;
        this.studentFirstName = studentFirstName;
        this.studentLastName = studentLastName;
        this.shift = shift;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", parent=" + parent +
                ", studentFirstName='" + studentFirstName + '\'' +
                ", studentLastName='" + studentLastName + '\'' +
                ", shift=" + shift +
                '}';
    }
}