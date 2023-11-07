package com.example.backintegrador.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
@Entity
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty
    @Pattern(regexp = "^[A-Za-z]*$\n*", message = "Nombre incorrecto")
    private String firstName;
    @NotEmpty
    @Pattern(regexp = "^[A-Za-z]*$\n*", message = "Apellido incorrecto")
    private String lastName;
    @Email
    @NotEmpty
    @Column(unique = true)
    private String email;
    @Pattern(regexp="^(?:[1-9]\\d{0,4}|99999)$", message = "Numero Incorrecto, Maximo 99999")
    private String donationAmount;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getDonationAmount() {
        return donationAmount;
    }

    public void setDonationAmount(String donationAmount) {
        this.donationAmount = donationAmount;
    }

    public Donation(){}

    public Donation(Long id, String firstName, String lastName, String email, String donationAmount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.donationAmount = donationAmount;
    }

    @Override
    public String toString() {
        return "Donation{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", donationAmount='" + donationAmount + '\'' +
                '}';
    }
}