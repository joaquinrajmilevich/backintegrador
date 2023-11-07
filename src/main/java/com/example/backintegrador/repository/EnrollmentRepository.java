package com.example.backintegrador.repository;
import com.example.backintegrador.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepository extends JpaRepository<Student, Long> {
}