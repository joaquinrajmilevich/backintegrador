package com.example.backintegrador.controller;

import com.example.backintegrador.entity.Parent;
import com.example.backintegrador.entity.Student;
import com.example.backintegrador.entity.Donation;
import com.example.backintegrador.service.DonationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path = "api/v1/donation")
public class DonationController {
    @Autowired
    private final DonationService donationService;

    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    @GetMapping
    public List<Donation> getAll(){
        return donationService.getDonations();
    }

    @GetMapping("/{donation_id}")
    public Optional<Donation> getById(@PathVariable("donation_id") Long donationId){
        return donationService.getDonation(donationId);
    }
    @DeleteMapping("/{donation_id}")
    public void deleteDonation(@PathVariable("donation_id") Long donationID){
        donationService.delete(donationID);
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<Object> setDonation(
            @Valid @RequestBody Donation donation,
            BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Validation failed");
            errorResponse.put("errors", getValidationErrors(bindingResult));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }

        try {
            donationService.setOrUpdate(donation);
            Map<String, String> successfulResponse = new HashMap<>();
            successfulResponse.put("message", "OK");
            return ResponseEntity.ok(successfulResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Donation failed");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    private List<Map<String, String>> getValidationErrors(BindingResult bindingResult) {
        List<Map<String, String>> errors = new ArrayList<>();
        for (ObjectError error : bindingResult.getAllErrors()) {
            Map<String, String> errorDetails = new HashMap<>();
            if (error instanceof FieldError) {
                FieldError fieldError = (FieldError) error;
                errorDetails.put(fieldError.getField(), fieldError.getDefaultMessage());
            } else {
                errorDetails.put(error.getObjectName(), error.getDefaultMessage());
            }
            errors.add(errorDetails);
        }

        return errors;
    }
}
