package com.example.backintegrador.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

import java.util.List;
@Entity
public class Parent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long parent_id;
    @NotEmpty
    @Pattern(regexp = "^[A-Za-z]*$\n*", message = "Nombre tutor incorrecto")
    private String firstName;
    @NotEmpty
    @Pattern(regexp = "^[A-Za-z]*$\n*", message = "Apellido tutor incorrecto")
    private String lastName;
    @Email
    @NotEmpty
    @Column(unique = true)
    private String email;
    @NotEmpty
    @Pattern(regexp = "^[+]?[0-9()-]*$", message = "Número incorrecto")
    private String phoneNumber;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE)
    private List<Student> students;


    // Getters and setters


    public Long getParent_id() {
        return parent_id;
    }

    public void setParent_id(Long parent_id) {
        this.parent_id = parent_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
    public Parent(){}
    public Parent(Long parent_id, String firstName, String lastName, String email, String phoneNumber, List<Student> students) {
        this.parent_id = parent_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.students = students;
    }

    @Override
    public String toString() {
        return "Parent{" +
                "parent_id=" + parent_id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", students=" + students +
                '}';
    }
}