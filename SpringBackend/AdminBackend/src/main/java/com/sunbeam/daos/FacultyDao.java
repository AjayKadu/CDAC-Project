package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Faculty;

@Repository
public interface FacultyDao extends JpaRepository<Faculty, Integer> {
    
}
