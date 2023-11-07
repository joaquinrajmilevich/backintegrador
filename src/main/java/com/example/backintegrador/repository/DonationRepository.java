package com.example.backintegrador.repository;
import com.example.backintegrador.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
}
