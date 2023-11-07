package com.example.backintegrador.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.backintegrador.entity.Donation;
import com.example.backintegrador.repository.DonationRepository;

@Service
public class DonationService {
    @Autowired
    DonationRepository donationRepository;
    public List<Donation> getDonations(){
        return donationRepository.findAll();
    }

    public Optional<Donation> getDonation(Long id){
        return donationRepository.findById(id);
    }

    public void setOrUpdate(Donation donation) {
        donationRepository.save(donation);

    }
    public void delete(long id) {
        donationRepository.deleteById(id);
    }
}

